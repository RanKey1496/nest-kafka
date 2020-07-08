import { Injectable, HttpException } from '@nestjs/common';
import { COURSES } from './courses.repository';

@Injectable()
export class CoursesService {
  courses = COURSES;

  async getCourses(): Promise<{ id: number, title: string, description: string, author: string }[]> {
    return this.courses;
  }

  async getCourse(id: number): Promise<{ id: number, title: string, description: string, author: string}> {
    const course = await this.courses.find(course => course.id === Number(id));
    if (!course) {
      throw new HttpException('Course does not exists', 404);
    }
    return course;
  }

  async addCourse(course: { id: number, title: string, description: string, author: string}): Promise<void> {
    this.courses.push(course);
  }

  async deleteCourse(id: number): Promise<void> {
    const index = this.courses.findIndex(course => course.id === id);
    if (index === -1) {
      throw new HttpException('Course does not exists', 404);
    }
    this.courses.splice(index, 1);
  }

}
