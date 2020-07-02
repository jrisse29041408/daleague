import { MiddlewareFn } from 'type-graphql';
import { MyContext } from 'src/app/types/MyContext';

export const isAuth: MiddlewareFn<MyContext> = async (
  { context: { req } },
  next
) => {
  if (!req.session!.userId) {
    throw new Error('Not authenticated');
  }

  return next();
};
