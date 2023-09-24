import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus',
})
export class UserStatusPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return 'Active';
    } else {
      return 'Deactive';
    }
  }
}
