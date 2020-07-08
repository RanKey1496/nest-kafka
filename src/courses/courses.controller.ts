import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-curse.dto';

@Controller('courses')
export class CoursesController {

  constructor(private coursesService: CoursesService) {}

  @Get()
  async getCourses() {
    return await this.coursesService.getCourses()
  }

  @Get(':id')
  async getCourse(@Param('id') id: number) {
    return await this.coursesService.getCourse(id);
  }

  @Post()
  async addCourse(@Body() createCuorseDTO: CreateCourseDto) {
    await this.coursesService.addCourse(createCuorseDTO);
    return 'Created successfully';
  }

  @Delete()
  async deleteCourse(@Query() query) {
    await this.coursesService.deleteCourse(query.id);
    return 'Deleted successfully';
  }

}
