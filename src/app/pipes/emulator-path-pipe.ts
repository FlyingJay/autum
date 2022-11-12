import { Pipe, PipeTransform } from '@angular/core';
import { environment } from './../../environments/environment';

// Converts a resource URL to work on android emulators.
@Pipe({ name: 'emulatorPath' })
export class EmulatorPathPipe implements PipeTransform {
	transform(filename: string): string {
		if (filename) {
			return environment.production ? filename : filename.replace('http://localhost:8000','http://10.0.2.2:8000')
		}
	}
}