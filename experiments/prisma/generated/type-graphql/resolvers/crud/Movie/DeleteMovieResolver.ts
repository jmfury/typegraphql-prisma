import * as TypeGraphQL from "type-graphql";
import { DeleteMovieArgs } from "./args/DeleteMovieArgs";
import { Movie } from "../../../models/Movie";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Movie)
export class DeleteMovieResolver {
  @TypeGraphQL.Mutation(_returns => Movie, {
    nullable: true
  })
  async deleteMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteMovieArgs): Promise<Movie | null> {
    return ctx.prisma.movie.delete(args);
  }
}
