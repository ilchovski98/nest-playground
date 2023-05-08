import { Injectable } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  getBookmark(): string {
    return 'Providing Bookmark...';
  }
}
