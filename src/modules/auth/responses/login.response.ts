import { Field, ObjectType } from '@nestjs/graphql';

import { UserModel } from '../models/user.model';

@ObjectType()
export class LoginResponse {
	@Field(() => String)
	accessToken: string;

	@Field(() => UserModel)
	user: UserModel;
}
