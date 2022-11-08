import { IsNotEmpty, IsString } from 'class-validator';

export class FollowUserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  userToFollowId: string;
}
