import { Module } from '@nestjs/common';
import { TasksController } from 'src/tasks/tasks.controller';
import { TaskService } from './shared/task.service/task.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService],
})
export class TaskModule {}
