import { NavOptions, createAnimation, Animation } from '@ionic/core';

interface TransitionOptions extends NavOptions {
  progressCallback?: ((ani: Animation | undefined) => void);
  baseEl: any;
  enteringEl: HTMLElement;
  leavingEl: HTMLElement | undefined;
}

function getIonPageElement(element: HTMLElement) {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
  if (ionPage) {
    return ionPage;
  }
  // idk, return the original element so at least something animates and we don't have a null pointer
  return element;
}

function addPageShadowAnimation(rootAnimation: Animation, rootElement: HTMLElement, mode: 'entering' | 'leaving', maxOpacity: string) {

  const shadowElement = rootElement.querySelector('app-page-shadow');
  if (!shadowElement) {
    return;
  }

  const shadowElementAnimation = createAnimation()
    .addElement(shadowElement)
    .beforeStyles({display: 'block'})
    .afterClearStyles(['display']);

  if (mode === 'entering') {
    shadowElementAnimation.fromTo('opacity', maxOpacity, '0');
  } else {
    shadowElementAnimation.fromTo('opacity', '0', maxOpacity);
  }

  rootAnimation.addAnimation(shadowElementAnimation);
}

export function woltNavigationAnimation(_: HTMLElement, opts: TransitionOptions) {
  const DURATION = 300; // increase during development to slow down animation

  const TOP_TRANSFORM_OFF = 'perspective(200px) translateX(100%) rotateY(30deg)';
  const TOP_TRANSFORM_ON = 'perspective(200px) translateX(0) rotateY(0deg)';

  const BOTTOM_TRANSFORM_OFF = 'translateX(-20%) scale(0.9)';
  const BOTTOM_TRANSFORM_ON = 'translateX(0) scale(1)';

  const rootTransition = createAnimation()
    .duration(opts.duration || DURATION)
    .easing('cubic-bezier(0.3,0,0.66,1)');

  const enteringPage = createAnimation()
    .addElement(getIonPageElement(opts.enteringEl))
    .beforeStyles({ 'transform-origin': 'center right'})
    .beforeRemoveClass('ion-page-invisible');

  const leavingPage = createAnimation()
    .addElement(getIonPageElement(opts.leavingEl));

  if (opts.direction === 'forward') {
    enteringPage
      .fromTo('transform', TOP_TRANSFORM_OFF, TOP_TRANSFORM_ON);

    leavingPage
      .fromTo('transform', BOTTOM_TRANSFORM_ON, BOTTOM_TRANSFORM_OFF);

    addPageShadowAnimation(rootTransition, opts.enteringEl, 'entering', '0.25');
    addPageShadowAnimation(rootTransition, opts.leavingEl, 'leaving', '0.5');
  } else {
    leavingPage
      .fromTo('transform', TOP_TRANSFORM_ON, TOP_TRANSFORM_OFF);

    enteringPage
      .fromTo('transform', BOTTOM_TRANSFORM_OFF, BOTTOM_TRANSFORM_ON);

    addPageShadowAnimation(rootTransition, opts.enteringEl, 'entering', '0.5');
    addPageShadowAnimation(rootTransition, opts.leavingEl, 'leaving', '0.25');
  }

  rootTransition.addAnimation(enteringPage);
  rootTransition.addAnimation(leavingPage);
  return rootTransition;
}
