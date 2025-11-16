
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Experiment
 * 
 */
export type Experiment = $Result.DefaultSelection<Prisma.$ExperimentPayload>
/**
 * Model StudentExperimentLog
 * 
 */
export type StudentExperimentLog = $Result.DefaultSelection<Prisma.$StudentExperimentLogPayload>
/**
 * Model AIInteractionLog
 * 
 */
export type AIInteractionLog = $Result.DefaultSelection<Prisma.$AIInteractionLogPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model ClassMember
 * 
 */
export type ClassMember = $Result.DefaultSelection<Prisma.$ClassMemberPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  teacher: 'teacher',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Subject: {
  physics: 'physics',
  chemistry: 'chemistry',
  biology: 'biology'
};

export type Subject = (typeof Subject)[keyof typeof Subject]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Subject = $Enums.Subject

export const Subject: typeof $Enums.Subject

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experiment`: Exposes CRUD operations for the **Experiment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiments
    * const experiments = await prisma.experiment.findMany()
    * ```
    */
  get experiment(): Prisma.ExperimentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentExperimentLog`: Exposes CRUD operations for the **StudentExperimentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentExperimentLogs
    * const studentExperimentLogs = await prisma.studentExperimentLog.findMany()
    * ```
    */
  get studentExperimentLog(): Prisma.StudentExperimentLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIInteractionLog`: Exposes CRUD operations for the **AIInteractionLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIInteractionLogs
    * const aIInteractionLogs = await prisma.aIInteractionLog.findMany()
    * ```
    */
  get aIInteractionLog(): Prisma.AIInteractionLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.classMember`: Exposes CRUD operations for the **ClassMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClassMembers
    * const classMembers = await prisma.classMember.findMany()
    * ```
    */
  get classMember(): Prisma.ClassMemberDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Experiment: 'Experiment',
    StudentExperimentLog: 'StudentExperimentLog',
    AIInteractionLog: 'AIInteractionLog',
    Class: 'Class',
    ClassMember: 'ClassMember'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "experiment" | "studentExperimentLog" | "aIInteractionLog" | "class" | "classMember"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Experiment: {
        payload: Prisma.$ExperimentPayload<ExtArgs>
        fields: Prisma.ExperimentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperimentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperimentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>
          }
          findFirst: {
            args: Prisma.ExperimentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperimentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>
          }
          findMany: {
            args: Prisma.ExperimentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>[]
          }
          create: {
            args: Prisma.ExperimentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>
          }
          createMany: {
            args: Prisma.ExperimentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperimentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>
          }
          update: {
            args: Prisma.ExperimentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>
          }
          deleteMany: {
            args: Prisma.ExperimentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperimentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperimentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperimentPayload>
          }
          aggregate: {
            args: Prisma.ExperimentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperiment>
          }
          groupBy: {
            args: Prisma.ExperimentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperimentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperimentCountArgs<ExtArgs>
            result: $Utils.Optional<ExperimentCountAggregateOutputType> | number
          }
        }
      }
      StudentExperimentLog: {
        payload: Prisma.$StudentExperimentLogPayload<ExtArgs>
        fields: Prisma.StudentExperimentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentExperimentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentExperimentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>
          }
          findFirst: {
            args: Prisma.StudentExperimentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentExperimentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>
          }
          findMany: {
            args: Prisma.StudentExperimentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>[]
          }
          create: {
            args: Prisma.StudentExperimentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>
          }
          createMany: {
            args: Prisma.StudentExperimentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentExperimentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>
          }
          update: {
            args: Prisma.StudentExperimentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>
          }
          deleteMany: {
            args: Prisma.StudentExperimentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentExperimentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentExperimentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentExperimentLogPayload>
          }
          aggregate: {
            args: Prisma.StudentExperimentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentExperimentLog>
          }
          groupBy: {
            args: Prisma.StudentExperimentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentExperimentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentExperimentLogCountArgs<ExtArgs>
            result: $Utils.Optional<StudentExperimentLogCountAggregateOutputType> | number
          }
        }
      }
      AIInteractionLog: {
        payload: Prisma.$AIInteractionLogPayload<ExtArgs>
        fields: Prisma.AIInteractionLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIInteractionLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIInteractionLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>
          }
          findFirst: {
            args: Prisma.AIInteractionLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIInteractionLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>
          }
          findMany: {
            args: Prisma.AIInteractionLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>[]
          }
          create: {
            args: Prisma.AIInteractionLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>
          }
          createMany: {
            args: Prisma.AIInteractionLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AIInteractionLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>
          }
          update: {
            args: Prisma.AIInteractionLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>
          }
          deleteMany: {
            args: Prisma.AIInteractionLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIInteractionLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AIInteractionLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIInteractionLogPayload>
          }
          aggregate: {
            args: Prisma.AIInteractionLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIInteractionLog>
          }
          groupBy: {
            args: Prisma.AIInteractionLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIInteractionLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIInteractionLogCountArgs<ExtArgs>
            result: $Utils.Optional<AIInteractionLogCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      ClassMember: {
        payload: Prisma.$ClassMemberPayload<ExtArgs>
        fields: Prisma.ClassMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>
          }
          findFirst: {
            args: Prisma.ClassMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>
          }
          findMany: {
            args: Prisma.ClassMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>[]
          }
          create: {
            args: Prisma.ClassMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>
          }
          createMany: {
            args: Prisma.ClassMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClassMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>
          }
          update: {
            args: Prisma.ClassMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>
          }
          deleteMany: {
            args: Prisma.ClassMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassMemberPayload>
          }
          aggregate: {
            args: Prisma.ClassMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassMember>
          }
          groupBy: {
            args: Prisma.ClassMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ClassMemberCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    experiment?: ExperimentOmit
    studentExperimentLog?: StudentExperimentLogOmit
    aIInteractionLog?: AIInteractionLogOmit
    class?: ClassOmit
    classMember?: ClassMemberOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    experiments: number
    aiLogs: number
    classes: number
    teachingClasses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experiments?: boolean | UserCountOutputTypeCountExperimentsArgs
    aiLogs?: boolean | UserCountOutputTypeCountAiLogsArgs
    classes?: boolean | UserCountOutputTypeCountClassesArgs
    teachingClasses?: boolean | UserCountOutputTypeCountTeachingClassesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExperimentLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeachingClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
  }


  /**
   * Count Type ExperimentCountOutputType
   */

  export type ExperimentCountOutputType = {
    logs: number
    aiLogs: number
  }

  export type ExperimentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | ExperimentCountOutputTypeCountLogsArgs
    aiLogs?: boolean | ExperimentCountOutputTypeCountAiLogsArgs
  }

  // Custom InputTypes
  /**
   * ExperimentCountOutputType without action
   */
  export type ExperimentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperimentCountOutputType
     */
    select?: ExperimentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperimentCountOutputType without action
   */
  export type ExperimentCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExperimentLogWhereInput
  }

  /**
   * ExperimentCountOutputType without action
   */
  export type ExperimentCountOutputTypeCountAiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionLogWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    members: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ClassCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassMemberWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    fullName: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    fullName: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    experiments?: boolean | User$experimentsArgs<ExtArgs>
    aiLogs?: boolean | User$aiLogsArgs<ExtArgs>
    classes?: boolean | User$classesArgs<ExtArgs>
    teachingClasses?: boolean | User$teachingClassesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experiments?: boolean | User$experimentsArgs<ExtArgs>
    aiLogs?: boolean | User$aiLogsArgs<ExtArgs>
    classes?: boolean | User$classesArgs<ExtArgs>
    teachingClasses?: boolean | User$teachingClassesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      experiments: Prisma.$StudentExperimentLogPayload<ExtArgs>[]
      aiLogs: Prisma.$AIInteractionLogPayload<ExtArgs>[]
      classes: Prisma.$ClassMemberPayload<ExtArgs>[]
      teachingClasses: Prisma.$ClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      fullName: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experiments<T extends User$experimentsArgs<ExtArgs> = {}>(args?: Subset<T, User$experimentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiLogs<T extends User$aiLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$aiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classes<T extends User$classesArgs<ExtArgs> = {}>(args?: Subset<T, User$classesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachingClasses<T extends User$teachingClassesArgs<ExtArgs> = {}>(args?: Subset<T, User$teachingClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.experiments
   */
  export type User$experimentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    where?: StudentExperimentLogWhereInput
    orderBy?: StudentExperimentLogOrderByWithRelationInput | StudentExperimentLogOrderByWithRelationInput[]
    cursor?: StudentExperimentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentExperimentLogScalarFieldEnum | StudentExperimentLogScalarFieldEnum[]
  }

  /**
   * User.aiLogs
   */
  export type User$aiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    where?: AIInteractionLogWhereInput
    orderBy?: AIInteractionLogOrderByWithRelationInput | AIInteractionLogOrderByWithRelationInput[]
    cursor?: AIInteractionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIInteractionLogScalarFieldEnum | AIInteractionLogScalarFieldEnum[]
  }

  /**
   * User.classes
   */
  export type User$classesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    where?: ClassMemberWhereInput
    orderBy?: ClassMemberOrderByWithRelationInput | ClassMemberOrderByWithRelationInput[]
    cursor?: ClassMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassMemberScalarFieldEnum | ClassMemberScalarFieldEnum[]
  }

  /**
   * User.teachingClasses
   */
  export type User$teachingClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    cursor?: ClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Experiment
   */

  export type AggregateExperiment = {
    _count: ExperimentCountAggregateOutputType | null
    _avg: ExperimentAvgAggregateOutputType | null
    _sum: ExperimentSumAggregateOutputType | null
    _min: ExperimentMinAggregateOutputType | null
    _max: ExperimentMaxAggregateOutputType | null
  }

  export type ExperimentAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperimentSumAggregateOutputType = {
    id: number | null
  }

  export type ExperimentMinAggregateOutputType = {
    id: number | null
    name: string | null
    subject: $Enums.Subject | null
    description: string | null
    sceneAssetPath: string | null
    version: string | null
    createdAt: Date | null
  }

  export type ExperimentMaxAggregateOutputType = {
    id: number | null
    name: string | null
    subject: $Enums.Subject | null
    description: string | null
    sceneAssetPath: string | null
    version: string | null
    createdAt: Date | null
  }

  export type ExperimentCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    description: number
    sceneAssetPath: number
    version: number
    createdAt: number
    _all: number
  }


  export type ExperimentAvgAggregateInputType = {
    id?: true
  }

  export type ExperimentSumAggregateInputType = {
    id?: true
  }

  export type ExperimentMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    description?: true
    sceneAssetPath?: true
    version?: true
    createdAt?: true
  }

  export type ExperimentMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    description?: true
    sceneAssetPath?: true
    version?: true
    createdAt?: true
  }

  export type ExperimentCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    description?: true
    sceneAssetPath?: true
    version?: true
    createdAt?: true
    _all?: true
  }

  export type ExperimentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiment to aggregate.
     */
    where?: ExperimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiments to fetch.
     */
    orderBy?: ExperimentOrderByWithRelationInput | ExperimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiments
    **/
    _count?: true | ExperimentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperimentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperimentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperimentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperimentMaxAggregateInputType
  }

  export type GetExperimentAggregateType<T extends ExperimentAggregateArgs> = {
        [P in keyof T & keyof AggregateExperiment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperiment[P]>
      : GetScalarType<T[P], AggregateExperiment[P]>
  }




  export type ExperimentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperimentWhereInput
    orderBy?: ExperimentOrderByWithAggregationInput | ExperimentOrderByWithAggregationInput[]
    by: ExperimentScalarFieldEnum[] | ExperimentScalarFieldEnum
    having?: ExperimentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperimentCountAggregateInputType | true
    _avg?: ExperimentAvgAggregateInputType
    _sum?: ExperimentSumAggregateInputType
    _min?: ExperimentMinAggregateInputType
    _max?: ExperimentMaxAggregateInputType
  }

  export type ExperimentGroupByOutputType = {
    id: number
    name: string
    subject: $Enums.Subject
    description: string | null
    sceneAssetPath: string
    version: string | null
    createdAt: Date
    _count: ExperimentCountAggregateOutputType | null
    _avg: ExperimentAvgAggregateOutputType | null
    _sum: ExperimentSumAggregateOutputType | null
    _min: ExperimentMinAggregateOutputType | null
    _max: ExperimentMaxAggregateOutputType | null
  }

  type GetExperimentGroupByPayload<T extends ExperimentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperimentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperimentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperimentGroupByOutputType[P]>
            : GetScalarType<T[P], ExperimentGroupByOutputType[P]>
        }
      >
    >


  export type ExperimentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    description?: boolean
    sceneAssetPath?: boolean
    version?: boolean
    createdAt?: boolean
    logs?: boolean | Experiment$logsArgs<ExtArgs>
    aiLogs?: boolean | Experiment$aiLogsArgs<ExtArgs>
    _count?: boolean | ExperimentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experiment"]>



  export type ExperimentSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    description?: boolean
    sceneAssetPath?: boolean
    version?: boolean
    createdAt?: boolean
  }

  export type ExperimentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "subject" | "description" | "sceneAssetPath" | "version" | "createdAt", ExtArgs["result"]["experiment"]>
  export type ExperimentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Experiment$logsArgs<ExtArgs>
    aiLogs?: boolean | Experiment$aiLogsArgs<ExtArgs>
    _count?: boolean | ExperimentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExperimentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experiment"
    objects: {
      logs: Prisma.$StudentExperimentLogPayload<ExtArgs>[]
      aiLogs: Prisma.$AIInteractionLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      subject: $Enums.Subject
      description: string | null
      sceneAssetPath: string
      version: string | null
      createdAt: Date
    }, ExtArgs["result"]["experiment"]>
    composites: {}
  }

  type ExperimentGetPayload<S extends boolean | null | undefined | ExperimentDefaultArgs> = $Result.GetResult<Prisma.$ExperimentPayload, S>

  type ExperimentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperimentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperimentCountAggregateInputType | true
    }

  export interface ExperimentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experiment'], meta: { name: 'Experiment' } }
    /**
     * Find zero or one Experiment that matches the filter.
     * @param {ExperimentFindUniqueArgs} args - Arguments to find a Experiment
     * @example
     * // Get one Experiment
     * const experiment = await prisma.experiment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperimentFindUniqueArgs>(args: SelectSubset<T, ExperimentFindUniqueArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experiment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperimentFindUniqueOrThrowArgs} args - Arguments to find a Experiment
     * @example
     * // Get one Experiment
     * const experiment = await prisma.experiment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperimentFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperimentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experiment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentFindFirstArgs} args - Arguments to find a Experiment
     * @example
     * // Get one Experiment
     * const experiment = await prisma.experiment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperimentFindFirstArgs>(args?: SelectSubset<T, ExperimentFindFirstArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experiment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentFindFirstOrThrowArgs} args - Arguments to find a Experiment
     * @example
     * // Get one Experiment
     * const experiment = await prisma.experiment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperimentFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperimentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiments
     * const experiments = await prisma.experiment.findMany()
     * 
     * // Get first 10 Experiments
     * const experiments = await prisma.experiment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experimentWithIdOnly = await prisma.experiment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperimentFindManyArgs>(args?: SelectSubset<T, ExperimentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experiment.
     * @param {ExperimentCreateArgs} args - Arguments to create a Experiment.
     * @example
     * // Create one Experiment
     * const Experiment = await prisma.experiment.create({
     *   data: {
     *     // ... data to create a Experiment
     *   }
     * })
     * 
     */
    create<T extends ExperimentCreateArgs>(args: SelectSubset<T, ExperimentCreateArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiments.
     * @param {ExperimentCreateManyArgs} args - Arguments to create many Experiments.
     * @example
     * // Create many Experiments
     * const experiment = await prisma.experiment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperimentCreateManyArgs>(args?: SelectSubset<T, ExperimentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experiment.
     * @param {ExperimentDeleteArgs} args - Arguments to delete one Experiment.
     * @example
     * // Delete one Experiment
     * const Experiment = await prisma.experiment.delete({
     *   where: {
     *     // ... filter to delete one Experiment
     *   }
     * })
     * 
     */
    delete<T extends ExperimentDeleteArgs>(args: SelectSubset<T, ExperimentDeleteArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experiment.
     * @param {ExperimentUpdateArgs} args - Arguments to update one Experiment.
     * @example
     * // Update one Experiment
     * const experiment = await prisma.experiment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperimentUpdateArgs>(args: SelectSubset<T, ExperimentUpdateArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiments.
     * @param {ExperimentDeleteManyArgs} args - Arguments to filter Experiments to delete.
     * @example
     * // Delete a few Experiments
     * const { count } = await prisma.experiment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperimentDeleteManyArgs>(args?: SelectSubset<T, ExperimentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiments
     * const experiment = await prisma.experiment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperimentUpdateManyArgs>(args: SelectSubset<T, ExperimentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experiment.
     * @param {ExperimentUpsertArgs} args - Arguments to update or create a Experiment.
     * @example
     * // Update or create a Experiment
     * const experiment = await prisma.experiment.upsert({
     *   create: {
     *     // ... data to create a Experiment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experiment we want to update
     *   }
     * })
     */
    upsert<T extends ExperimentUpsertArgs>(args: SelectSubset<T, ExperimentUpsertArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentCountArgs} args - Arguments to filter Experiments to count.
     * @example
     * // Count the number of Experiments
     * const count = await prisma.experiment.count({
     *   where: {
     *     // ... the filter for the Experiments we want to count
     *   }
     * })
    **/
    count<T extends ExperimentCountArgs>(
      args?: Subset<T, ExperimentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperimentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperimentAggregateArgs>(args: Subset<T, ExperimentAggregateArgs>): Prisma.PrismaPromise<GetExperimentAggregateType<T>>

    /**
     * Group by Experiment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperimentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperimentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperimentGroupByArgs['orderBy'] }
        : { orderBy?: ExperimentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperimentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperimentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experiment model
   */
  readonly fields: ExperimentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experiment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperimentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Experiment$logsArgs<ExtArgs> = {}>(args?: Subset<T, Experiment$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiLogs<T extends Experiment$aiLogsArgs<ExtArgs> = {}>(args?: Subset<T, Experiment$aiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experiment model
   */
  interface ExperimentFieldRefs {
    readonly id: FieldRef<"Experiment", 'Int'>
    readonly name: FieldRef<"Experiment", 'String'>
    readonly subject: FieldRef<"Experiment", 'Subject'>
    readonly description: FieldRef<"Experiment", 'String'>
    readonly sceneAssetPath: FieldRef<"Experiment", 'String'>
    readonly version: FieldRef<"Experiment", 'String'>
    readonly createdAt: FieldRef<"Experiment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experiment findUnique
   */
  export type ExperimentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * Filter, which Experiment to fetch.
     */
    where: ExperimentWhereUniqueInput
  }

  /**
   * Experiment findUniqueOrThrow
   */
  export type ExperimentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * Filter, which Experiment to fetch.
     */
    where: ExperimentWhereUniqueInput
  }

  /**
   * Experiment findFirst
   */
  export type ExperimentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * Filter, which Experiment to fetch.
     */
    where?: ExperimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiments to fetch.
     */
    orderBy?: ExperimentOrderByWithRelationInput | ExperimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiments.
     */
    cursor?: ExperimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiments.
     */
    distinct?: ExperimentScalarFieldEnum | ExperimentScalarFieldEnum[]
  }

  /**
   * Experiment findFirstOrThrow
   */
  export type ExperimentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * Filter, which Experiment to fetch.
     */
    where?: ExperimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiments to fetch.
     */
    orderBy?: ExperimentOrderByWithRelationInput | ExperimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiments.
     */
    cursor?: ExperimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiments.
     */
    distinct?: ExperimentScalarFieldEnum | ExperimentScalarFieldEnum[]
  }

  /**
   * Experiment findMany
   */
  export type ExperimentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * Filter, which Experiments to fetch.
     */
    where?: ExperimentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiments to fetch.
     */
    orderBy?: ExperimentOrderByWithRelationInput | ExperimentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiments.
     */
    cursor?: ExperimentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiments.
     */
    skip?: number
    distinct?: ExperimentScalarFieldEnum | ExperimentScalarFieldEnum[]
  }

  /**
   * Experiment create
   */
  export type ExperimentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * The data needed to create a Experiment.
     */
    data: XOR<ExperimentCreateInput, ExperimentUncheckedCreateInput>
  }

  /**
   * Experiment createMany
   */
  export type ExperimentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiments.
     */
    data: ExperimentCreateManyInput | ExperimentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experiment update
   */
  export type ExperimentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * The data needed to update a Experiment.
     */
    data: XOR<ExperimentUpdateInput, ExperimentUncheckedUpdateInput>
    /**
     * Choose, which Experiment to update.
     */
    where: ExperimentWhereUniqueInput
  }

  /**
   * Experiment updateMany
   */
  export type ExperimentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiments.
     */
    data: XOR<ExperimentUpdateManyMutationInput, ExperimentUncheckedUpdateManyInput>
    /**
     * Filter which Experiments to update
     */
    where?: ExperimentWhereInput
    /**
     * Limit how many Experiments to update.
     */
    limit?: number
  }

  /**
   * Experiment upsert
   */
  export type ExperimentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * The filter to search for the Experiment to update in case it exists.
     */
    where: ExperimentWhereUniqueInput
    /**
     * In case the Experiment found by the `where` argument doesn't exist, create a new Experiment with this data.
     */
    create: XOR<ExperimentCreateInput, ExperimentUncheckedCreateInput>
    /**
     * In case the Experiment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperimentUpdateInput, ExperimentUncheckedUpdateInput>
  }

  /**
   * Experiment delete
   */
  export type ExperimentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
    /**
     * Filter which Experiment to delete.
     */
    where: ExperimentWhereUniqueInput
  }

  /**
   * Experiment deleteMany
   */
  export type ExperimentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiments to delete
     */
    where?: ExperimentWhereInput
    /**
     * Limit how many Experiments to delete.
     */
    limit?: number
  }

  /**
   * Experiment.logs
   */
  export type Experiment$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    where?: StudentExperimentLogWhereInput
    orderBy?: StudentExperimentLogOrderByWithRelationInput | StudentExperimentLogOrderByWithRelationInput[]
    cursor?: StudentExperimentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentExperimentLogScalarFieldEnum | StudentExperimentLogScalarFieldEnum[]
  }

  /**
   * Experiment.aiLogs
   */
  export type Experiment$aiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    where?: AIInteractionLogWhereInput
    orderBy?: AIInteractionLogOrderByWithRelationInput | AIInteractionLogOrderByWithRelationInput[]
    cursor?: AIInteractionLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIInteractionLogScalarFieldEnum | AIInteractionLogScalarFieldEnum[]
  }

  /**
   * Experiment without action
   */
  export type ExperimentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiment
     */
    select?: ExperimentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experiment
     */
    omit?: ExperimentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperimentInclude<ExtArgs> | null
  }


  /**
   * Model StudentExperimentLog
   */

  export type AggregateStudentExperimentLog = {
    _count: StudentExperimentLogCountAggregateOutputType | null
    _avg: StudentExperimentLogAvgAggregateOutputType | null
    _sum: StudentExperimentLogSumAggregateOutputType | null
    _min: StudentExperimentLogMinAggregateOutputType | null
    _max: StudentExperimentLogMaxAggregateOutputType | null
  }

  export type StudentExperimentLogAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
  }

  export type StudentExperimentLogSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
  }

  export type StudentExperimentLogMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
    startTime: Date | null
    endTime: Date | null
    completionStatus: string | null
  }

  export type StudentExperimentLogMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
    startTime: Date | null
    endTime: Date | null
    completionStatus: string | null
  }

  export type StudentExperimentLogCountAggregateOutputType = {
    id: number
    studentId: number
    experimentId: number
    startTime: number
    endTime: number
    completionStatus: number
    recordedData: number
    actionsLog: number
    _all: number
  }


  export type StudentExperimentLogAvgAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
  }

  export type StudentExperimentLogSumAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
  }

  export type StudentExperimentLogMinAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
    startTime?: true
    endTime?: true
    completionStatus?: true
  }

  export type StudentExperimentLogMaxAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
    startTime?: true
    endTime?: true
    completionStatus?: true
  }

  export type StudentExperimentLogCountAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
    startTime?: true
    endTime?: true
    completionStatus?: true
    recordedData?: true
    actionsLog?: true
    _all?: true
  }

  export type StudentExperimentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentExperimentLog to aggregate.
     */
    where?: StudentExperimentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExperimentLogs to fetch.
     */
    orderBy?: StudentExperimentLogOrderByWithRelationInput | StudentExperimentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentExperimentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExperimentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExperimentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentExperimentLogs
    **/
    _count?: true | StudentExperimentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentExperimentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentExperimentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentExperimentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentExperimentLogMaxAggregateInputType
  }

  export type GetStudentExperimentLogAggregateType<T extends StudentExperimentLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentExperimentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentExperimentLog[P]>
      : GetScalarType<T[P], AggregateStudentExperimentLog[P]>
  }




  export type StudentExperimentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentExperimentLogWhereInput
    orderBy?: StudentExperimentLogOrderByWithAggregationInput | StudentExperimentLogOrderByWithAggregationInput[]
    by: StudentExperimentLogScalarFieldEnum[] | StudentExperimentLogScalarFieldEnum
    having?: StudentExperimentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentExperimentLogCountAggregateInputType | true
    _avg?: StudentExperimentLogAvgAggregateInputType
    _sum?: StudentExperimentLogSumAggregateInputType
    _min?: StudentExperimentLogMinAggregateInputType
    _max?: StudentExperimentLogMaxAggregateInputType
  }

  export type StudentExperimentLogGroupByOutputType = {
    id: number
    studentId: number
    experimentId: number
    startTime: Date
    endTime: Date | null
    completionStatus: string
    recordedData: JsonValue | null
    actionsLog: JsonValue | null
    _count: StudentExperimentLogCountAggregateOutputType | null
    _avg: StudentExperimentLogAvgAggregateOutputType | null
    _sum: StudentExperimentLogSumAggregateOutputType | null
    _min: StudentExperimentLogMinAggregateOutputType | null
    _max: StudentExperimentLogMaxAggregateOutputType | null
  }

  type GetStudentExperimentLogGroupByPayload<T extends StudentExperimentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentExperimentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentExperimentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentExperimentLogGroupByOutputType[P]>
            : GetScalarType<T[P], StudentExperimentLogGroupByOutputType[P]>
        }
      >
    >


  export type StudentExperimentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    experimentId?: boolean
    startTime?: boolean
    endTime?: boolean
    completionStatus?: boolean
    recordedData?: boolean
    actionsLog?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    experiment?: boolean | ExperimentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentExperimentLog"]>



  export type StudentExperimentLogSelectScalar = {
    id?: boolean
    studentId?: boolean
    experimentId?: boolean
    startTime?: boolean
    endTime?: boolean
    completionStatus?: boolean
    recordedData?: boolean
    actionsLog?: boolean
  }

  export type StudentExperimentLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "experimentId" | "startTime" | "endTime" | "completionStatus" | "recordedData" | "actionsLog", ExtArgs["result"]["studentExperimentLog"]>
  export type StudentExperimentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    experiment?: boolean | ExperimentDefaultArgs<ExtArgs>
  }

  export type $StudentExperimentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentExperimentLog"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      experiment: Prisma.$ExperimentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      experimentId: number
      startTime: Date
      endTime: Date | null
      completionStatus: string
      recordedData: Prisma.JsonValue | null
      actionsLog: Prisma.JsonValue | null
    }, ExtArgs["result"]["studentExperimentLog"]>
    composites: {}
  }

  type StudentExperimentLogGetPayload<S extends boolean | null | undefined | StudentExperimentLogDefaultArgs> = $Result.GetResult<Prisma.$StudentExperimentLogPayload, S>

  type StudentExperimentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentExperimentLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentExperimentLogCountAggregateInputType | true
    }

  export interface StudentExperimentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentExperimentLog'], meta: { name: 'StudentExperimentLog' } }
    /**
     * Find zero or one StudentExperimentLog that matches the filter.
     * @param {StudentExperimentLogFindUniqueArgs} args - Arguments to find a StudentExperimentLog
     * @example
     * // Get one StudentExperimentLog
     * const studentExperimentLog = await prisma.studentExperimentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentExperimentLogFindUniqueArgs>(args: SelectSubset<T, StudentExperimentLogFindUniqueArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentExperimentLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentExperimentLogFindUniqueOrThrowArgs} args - Arguments to find a StudentExperimentLog
     * @example
     * // Get one StudentExperimentLog
     * const studentExperimentLog = await prisma.studentExperimentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentExperimentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentExperimentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentExperimentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogFindFirstArgs} args - Arguments to find a StudentExperimentLog
     * @example
     * // Get one StudentExperimentLog
     * const studentExperimentLog = await prisma.studentExperimentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentExperimentLogFindFirstArgs>(args?: SelectSubset<T, StudentExperimentLogFindFirstArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentExperimentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogFindFirstOrThrowArgs} args - Arguments to find a StudentExperimentLog
     * @example
     * // Get one StudentExperimentLog
     * const studentExperimentLog = await prisma.studentExperimentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentExperimentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentExperimentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentExperimentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentExperimentLogs
     * const studentExperimentLogs = await prisma.studentExperimentLog.findMany()
     * 
     * // Get first 10 StudentExperimentLogs
     * const studentExperimentLogs = await prisma.studentExperimentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentExperimentLogWithIdOnly = await prisma.studentExperimentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentExperimentLogFindManyArgs>(args?: SelectSubset<T, StudentExperimentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentExperimentLog.
     * @param {StudentExperimentLogCreateArgs} args - Arguments to create a StudentExperimentLog.
     * @example
     * // Create one StudentExperimentLog
     * const StudentExperimentLog = await prisma.studentExperimentLog.create({
     *   data: {
     *     // ... data to create a StudentExperimentLog
     *   }
     * })
     * 
     */
    create<T extends StudentExperimentLogCreateArgs>(args: SelectSubset<T, StudentExperimentLogCreateArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentExperimentLogs.
     * @param {StudentExperimentLogCreateManyArgs} args - Arguments to create many StudentExperimentLogs.
     * @example
     * // Create many StudentExperimentLogs
     * const studentExperimentLog = await prisma.studentExperimentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentExperimentLogCreateManyArgs>(args?: SelectSubset<T, StudentExperimentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StudentExperimentLog.
     * @param {StudentExperimentLogDeleteArgs} args - Arguments to delete one StudentExperimentLog.
     * @example
     * // Delete one StudentExperimentLog
     * const StudentExperimentLog = await prisma.studentExperimentLog.delete({
     *   where: {
     *     // ... filter to delete one StudentExperimentLog
     *   }
     * })
     * 
     */
    delete<T extends StudentExperimentLogDeleteArgs>(args: SelectSubset<T, StudentExperimentLogDeleteArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentExperimentLog.
     * @param {StudentExperimentLogUpdateArgs} args - Arguments to update one StudentExperimentLog.
     * @example
     * // Update one StudentExperimentLog
     * const studentExperimentLog = await prisma.studentExperimentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentExperimentLogUpdateArgs>(args: SelectSubset<T, StudentExperimentLogUpdateArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentExperimentLogs.
     * @param {StudentExperimentLogDeleteManyArgs} args - Arguments to filter StudentExperimentLogs to delete.
     * @example
     * // Delete a few StudentExperimentLogs
     * const { count } = await prisma.studentExperimentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentExperimentLogDeleteManyArgs>(args?: SelectSubset<T, StudentExperimentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentExperimentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentExperimentLogs
     * const studentExperimentLog = await prisma.studentExperimentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentExperimentLogUpdateManyArgs>(args: SelectSubset<T, StudentExperimentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentExperimentLog.
     * @param {StudentExperimentLogUpsertArgs} args - Arguments to update or create a StudentExperimentLog.
     * @example
     * // Update or create a StudentExperimentLog
     * const studentExperimentLog = await prisma.studentExperimentLog.upsert({
     *   create: {
     *     // ... data to create a StudentExperimentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentExperimentLog we want to update
     *   }
     * })
     */
    upsert<T extends StudentExperimentLogUpsertArgs>(args: SelectSubset<T, StudentExperimentLogUpsertArgs<ExtArgs>>): Prisma__StudentExperimentLogClient<$Result.GetResult<Prisma.$StudentExperimentLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentExperimentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogCountArgs} args - Arguments to filter StudentExperimentLogs to count.
     * @example
     * // Count the number of StudentExperimentLogs
     * const count = await prisma.studentExperimentLog.count({
     *   where: {
     *     // ... the filter for the StudentExperimentLogs we want to count
     *   }
     * })
    **/
    count<T extends StudentExperimentLogCountArgs>(
      args?: Subset<T, StudentExperimentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentExperimentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentExperimentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentExperimentLogAggregateArgs>(args: Subset<T, StudentExperimentLogAggregateArgs>): Prisma.PrismaPromise<GetStudentExperimentLogAggregateType<T>>

    /**
     * Group by StudentExperimentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentExperimentLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentExperimentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentExperimentLogGroupByArgs['orderBy'] }
        : { orderBy?: StudentExperimentLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentExperimentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentExperimentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentExperimentLog model
   */
  readonly fields: StudentExperimentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentExperimentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentExperimentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experiment<T extends ExperimentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperimentDefaultArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentExperimentLog model
   */
  interface StudentExperimentLogFieldRefs {
    readonly id: FieldRef<"StudentExperimentLog", 'Int'>
    readonly studentId: FieldRef<"StudentExperimentLog", 'Int'>
    readonly experimentId: FieldRef<"StudentExperimentLog", 'Int'>
    readonly startTime: FieldRef<"StudentExperimentLog", 'DateTime'>
    readonly endTime: FieldRef<"StudentExperimentLog", 'DateTime'>
    readonly completionStatus: FieldRef<"StudentExperimentLog", 'String'>
    readonly recordedData: FieldRef<"StudentExperimentLog", 'Json'>
    readonly actionsLog: FieldRef<"StudentExperimentLog", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * StudentExperimentLog findUnique
   */
  export type StudentExperimentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentExperimentLog to fetch.
     */
    where: StudentExperimentLogWhereUniqueInput
  }

  /**
   * StudentExperimentLog findUniqueOrThrow
   */
  export type StudentExperimentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentExperimentLog to fetch.
     */
    where: StudentExperimentLogWhereUniqueInput
  }

  /**
   * StudentExperimentLog findFirst
   */
  export type StudentExperimentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentExperimentLog to fetch.
     */
    where?: StudentExperimentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExperimentLogs to fetch.
     */
    orderBy?: StudentExperimentLogOrderByWithRelationInput | StudentExperimentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentExperimentLogs.
     */
    cursor?: StudentExperimentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExperimentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExperimentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentExperimentLogs.
     */
    distinct?: StudentExperimentLogScalarFieldEnum | StudentExperimentLogScalarFieldEnum[]
  }

  /**
   * StudentExperimentLog findFirstOrThrow
   */
  export type StudentExperimentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentExperimentLog to fetch.
     */
    where?: StudentExperimentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExperimentLogs to fetch.
     */
    orderBy?: StudentExperimentLogOrderByWithRelationInput | StudentExperimentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentExperimentLogs.
     */
    cursor?: StudentExperimentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExperimentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExperimentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentExperimentLogs.
     */
    distinct?: StudentExperimentLogScalarFieldEnum | StudentExperimentLogScalarFieldEnum[]
  }

  /**
   * StudentExperimentLog findMany
   */
  export type StudentExperimentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * Filter, which StudentExperimentLogs to fetch.
     */
    where?: StudentExperimentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentExperimentLogs to fetch.
     */
    orderBy?: StudentExperimentLogOrderByWithRelationInput | StudentExperimentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentExperimentLogs.
     */
    cursor?: StudentExperimentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentExperimentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentExperimentLogs.
     */
    skip?: number
    distinct?: StudentExperimentLogScalarFieldEnum | StudentExperimentLogScalarFieldEnum[]
  }

  /**
   * StudentExperimentLog create
   */
  export type StudentExperimentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentExperimentLog.
     */
    data: XOR<StudentExperimentLogCreateInput, StudentExperimentLogUncheckedCreateInput>
  }

  /**
   * StudentExperimentLog createMany
   */
  export type StudentExperimentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentExperimentLogs.
     */
    data: StudentExperimentLogCreateManyInput | StudentExperimentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentExperimentLog update
   */
  export type StudentExperimentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentExperimentLog.
     */
    data: XOR<StudentExperimentLogUpdateInput, StudentExperimentLogUncheckedUpdateInput>
    /**
     * Choose, which StudentExperimentLog to update.
     */
    where: StudentExperimentLogWhereUniqueInput
  }

  /**
   * StudentExperimentLog updateMany
   */
  export type StudentExperimentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentExperimentLogs.
     */
    data: XOR<StudentExperimentLogUpdateManyMutationInput, StudentExperimentLogUncheckedUpdateManyInput>
    /**
     * Filter which StudentExperimentLogs to update
     */
    where?: StudentExperimentLogWhereInput
    /**
     * Limit how many StudentExperimentLogs to update.
     */
    limit?: number
  }

  /**
   * StudentExperimentLog upsert
   */
  export type StudentExperimentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentExperimentLog to update in case it exists.
     */
    where: StudentExperimentLogWhereUniqueInput
    /**
     * In case the StudentExperimentLog found by the `where` argument doesn't exist, create a new StudentExperimentLog with this data.
     */
    create: XOR<StudentExperimentLogCreateInput, StudentExperimentLogUncheckedCreateInput>
    /**
     * In case the StudentExperimentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentExperimentLogUpdateInput, StudentExperimentLogUncheckedUpdateInput>
  }

  /**
   * StudentExperimentLog delete
   */
  export type StudentExperimentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
    /**
     * Filter which StudentExperimentLog to delete.
     */
    where: StudentExperimentLogWhereUniqueInput
  }

  /**
   * StudentExperimentLog deleteMany
   */
  export type StudentExperimentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentExperimentLogs to delete
     */
    where?: StudentExperimentLogWhereInput
    /**
     * Limit how many StudentExperimentLogs to delete.
     */
    limit?: number
  }

  /**
   * StudentExperimentLog without action
   */
  export type StudentExperimentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentExperimentLog
     */
    select?: StudentExperimentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentExperimentLog
     */
    omit?: StudentExperimentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentExperimentLogInclude<ExtArgs> | null
  }


  /**
   * Model AIInteractionLog
   */

  export type AggregateAIInteractionLog = {
    _count: AIInteractionLogCountAggregateOutputType | null
    _avg: AIInteractionLogAvgAggregateOutputType | null
    _sum: AIInteractionLogSumAggregateOutputType | null
    _min: AIInteractionLogMinAggregateOutputType | null
    _max: AIInteractionLogMaxAggregateOutputType | null
  }

  export type AIInteractionLogAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
  }

  export type AIInteractionLogSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
  }

  export type AIInteractionLogMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
    sessionId: string | null
    userQuery: string | null
    aiResponse: string | null
    createdAt: Date | null
  }

  export type AIInteractionLogMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    experimentId: number | null
    sessionId: string | null
    userQuery: string | null
    aiResponse: string | null
    createdAt: Date | null
  }

  export type AIInteractionLogCountAggregateOutputType = {
    id: number
    studentId: number
    experimentId: number
    sessionId: number
    userQuery: number
    aiResponse: number
    contextSnapshot: number
    createdAt: number
    _all: number
  }


  export type AIInteractionLogAvgAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
  }

  export type AIInteractionLogSumAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
  }

  export type AIInteractionLogMinAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
    sessionId?: true
    userQuery?: true
    aiResponse?: true
    createdAt?: true
  }

  export type AIInteractionLogMaxAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
    sessionId?: true
    userQuery?: true
    aiResponse?: true
    createdAt?: true
  }

  export type AIInteractionLogCountAggregateInputType = {
    id?: true
    studentId?: true
    experimentId?: true
    sessionId?: true
    userQuery?: true
    aiResponse?: true
    contextSnapshot?: true
    createdAt?: true
    _all?: true
  }

  export type AIInteractionLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInteractionLog to aggregate.
     */
    where?: AIInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractionLogs to fetch.
     */
    orderBy?: AIInteractionLogOrderByWithRelationInput | AIInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIInteractionLogs
    **/
    _count?: true | AIInteractionLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIInteractionLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIInteractionLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIInteractionLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIInteractionLogMaxAggregateInputType
  }

  export type GetAIInteractionLogAggregateType<T extends AIInteractionLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAIInteractionLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIInteractionLog[P]>
      : GetScalarType<T[P], AggregateAIInteractionLog[P]>
  }




  export type AIInteractionLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIInteractionLogWhereInput
    orderBy?: AIInteractionLogOrderByWithAggregationInput | AIInteractionLogOrderByWithAggregationInput[]
    by: AIInteractionLogScalarFieldEnum[] | AIInteractionLogScalarFieldEnum
    having?: AIInteractionLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIInteractionLogCountAggregateInputType | true
    _avg?: AIInteractionLogAvgAggregateInputType
    _sum?: AIInteractionLogSumAggregateInputType
    _min?: AIInteractionLogMinAggregateInputType
    _max?: AIInteractionLogMaxAggregateInputType
  }

  export type AIInteractionLogGroupByOutputType = {
    id: number
    studentId: number
    experimentId: number
    sessionId: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot: JsonValue | null
    createdAt: Date
    _count: AIInteractionLogCountAggregateOutputType | null
    _avg: AIInteractionLogAvgAggregateOutputType | null
    _sum: AIInteractionLogSumAggregateOutputType | null
    _min: AIInteractionLogMinAggregateOutputType | null
    _max: AIInteractionLogMaxAggregateOutputType | null
  }

  type GetAIInteractionLogGroupByPayload<T extends AIInteractionLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIInteractionLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIInteractionLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIInteractionLogGroupByOutputType[P]>
            : GetScalarType<T[P], AIInteractionLogGroupByOutputType[P]>
        }
      >
    >


  export type AIInteractionLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    experimentId?: boolean
    sessionId?: boolean
    userQuery?: boolean
    aiResponse?: boolean
    contextSnapshot?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    experiment?: boolean | ExperimentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIInteractionLog"]>



  export type AIInteractionLogSelectScalar = {
    id?: boolean
    studentId?: boolean
    experimentId?: boolean
    sessionId?: boolean
    userQuery?: boolean
    aiResponse?: boolean
    contextSnapshot?: boolean
    createdAt?: boolean
  }

  export type AIInteractionLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "experimentId" | "sessionId" | "userQuery" | "aiResponse" | "contextSnapshot" | "createdAt", ExtArgs["result"]["aIInteractionLog"]>
  export type AIInteractionLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    experiment?: boolean | ExperimentDefaultArgs<ExtArgs>
  }

  export type $AIInteractionLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIInteractionLog"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      experiment: Prisma.$ExperimentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      experimentId: number
      sessionId: string | null
      userQuery: string
      aiResponse: string
      contextSnapshot: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["aIInteractionLog"]>
    composites: {}
  }

  type AIInteractionLogGetPayload<S extends boolean | null | undefined | AIInteractionLogDefaultArgs> = $Result.GetResult<Prisma.$AIInteractionLogPayload, S>

  type AIInteractionLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIInteractionLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIInteractionLogCountAggregateInputType | true
    }

  export interface AIInteractionLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIInteractionLog'], meta: { name: 'AIInteractionLog' } }
    /**
     * Find zero or one AIInteractionLog that matches the filter.
     * @param {AIInteractionLogFindUniqueArgs} args - Arguments to find a AIInteractionLog
     * @example
     * // Get one AIInteractionLog
     * const aIInteractionLog = await prisma.aIInteractionLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIInteractionLogFindUniqueArgs>(args: SelectSubset<T, AIInteractionLogFindUniqueArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIInteractionLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIInteractionLogFindUniqueOrThrowArgs} args - Arguments to find a AIInteractionLog
     * @example
     * // Get one AIInteractionLog
     * const aIInteractionLog = await prisma.aIInteractionLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIInteractionLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AIInteractionLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIInteractionLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogFindFirstArgs} args - Arguments to find a AIInteractionLog
     * @example
     * // Get one AIInteractionLog
     * const aIInteractionLog = await prisma.aIInteractionLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIInteractionLogFindFirstArgs>(args?: SelectSubset<T, AIInteractionLogFindFirstArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIInteractionLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogFindFirstOrThrowArgs} args - Arguments to find a AIInteractionLog
     * @example
     * // Get one AIInteractionLog
     * const aIInteractionLog = await prisma.aIInteractionLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIInteractionLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AIInteractionLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIInteractionLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIInteractionLogs
     * const aIInteractionLogs = await prisma.aIInteractionLog.findMany()
     * 
     * // Get first 10 AIInteractionLogs
     * const aIInteractionLogs = await prisma.aIInteractionLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIInteractionLogWithIdOnly = await prisma.aIInteractionLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIInteractionLogFindManyArgs>(args?: SelectSubset<T, AIInteractionLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIInteractionLog.
     * @param {AIInteractionLogCreateArgs} args - Arguments to create a AIInteractionLog.
     * @example
     * // Create one AIInteractionLog
     * const AIInteractionLog = await prisma.aIInteractionLog.create({
     *   data: {
     *     // ... data to create a AIInteractionLog
     *   }
     * })
     * 
     */
    create<T extends AIInteractionLogCreateArgs>(args: SelectSubset<T, AIInteractionLogCreateArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIInteractionLogs.
     * @param {AIInteractionLogCreateManyArgs} args - Arguments to create many AIInteractionLogs.
     * @example
     * // Create many AIInteractionLogs
     * const aIInteractionLog = await prisma.aIInteractionLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIInteractionLogCreateManyArgs>(args?: SelectSubset<T, AIInteractionLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AIInteractionLog.
     * @param {AIInteractionLogDeleteArgs} args - Arguments to delete one AIInteractionLog.
     * @example
     * // Delete one AIInteractionLog
     * const AIInteractionLog = await prisma.aIInteractionLog.delete({
     *   where: {
     *     // ... filter to delete one AIInteractionLog
     *   }
     * })
     * 
     */
    delete<T extends AIInteractionLogDeleteArgs>(args: SelectSubset<T, AIInteractionLogDeleteArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIInteractionLog.
     * @param {AIInteractionLogUpdateArgs} args - Arguments to update one AIInteractionLog.
     * @example
     * // Update one AIInteractionLog
     * const aIInteractionLog = await prisma.aIInteractionLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIInteractionLogUpdateArgs>(args: SelectSubset<T, AIInteractionLogUpdateArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIInteractionLogs.
     * @param {AIInteractionLogDeleteManyArgs} args - Arguments to filter AIInteractionLogs to delete.
     * @example
     * // Delete a few AIInteractionLogs
     * const { count } = await prisma.aIInteractionLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIInteractionLogDeleteManyArgs>(args?: SelectSubset<T, AIInteractionLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIInteractionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIInteractionLogs
     * const aIInteractionLog = await prisma.aIInteractionLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIInteractionLogUpdateManyArgs>(args: SelectSubset<T, AIInteractionLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AIInteractionLog.
     * @param {AIInteractionLogUpsertArgs} args - Arguments to update or create a AIInteractionLog.
     * @example
     * // Update or create a AIInteractionLog
     * const aIInteractionLog = await prisma.aIInteractionLog.upsert({
     *   create: {
     *     // ... data to create a AIInteractionLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIInteractionLog we want to update
     *   }
     * })
     */
    upsert<T extends AIInteractionLogUpsertArgs>(args: SelectSubset<T, AIInteractionLogUpsertArgs<ExtArgs>>): Prisma__AIInteractionLogClient<$Result.GetResult<Prisma.$AIInteractionLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIInteractionLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogCountArgs} args - Arguments to filter AIInteractionLogs to count.
     * @example
     * // Count the number of AIInteractionLogs
     * const count = await prisma.aIInteractionLog.count({
     *   where: {
     *     // ... the filter for the AIInteractionLogs we want to count
     *   }
     * })
    **/
    count<T extends AIInteractionLogCountArgs>(
      args?: Subset<T, AIInteractionLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIInteractionLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIInteractionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIInteractionLogAggregateArgs>(args: Subset<T, AIInteractionLogAggregateArgs>): Prisma.PrismaPromise<GetAIInteractionLogAggregateType<T>>

    /**
     * Group by AIInteractionLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIInteractionLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIInteractionLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIInteractionLogGroupByArgs['orderBy'] }
        : { orderBy?: AIInteractionLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIInteractionLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIInteractionLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIInteractionLog model
   */
  readonly fields: AIInteractionLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIInteractionLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIInteractionLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    experiment<T extends ExperimentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperimentDefaultArgs<ExtArgs>>): Prisma__ExperimentClient<$Result.GetResult<Prisma.$ExperimentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIInteractionLog model
   */
  interface AIInteractionLogFieldRefs {
    readonly id: FieldRef<"AIInteractionLog", 'Int'>
    readonly studentId: FieldRef<"AIInteractionLog", 'Int'>
    readonly experimentId: FieldRef<"AIInteractionLog", 'Int'>
    readonly sessionId: FieldRef<"AIInteractionLog", 'String'>
    readonly userQuery: FieldRef<"AIInteractionLog", 'String'>
    readonly aiResponse: FieldRef<"AIInteractionLog", 'String'>
    readonly contextSnapshot: FieldRef<"AIInteractionLog", 'Json'>
    readonly createdAt: FieldRef<"AIInteractionLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIInteractionLog findUnique
   */
  export type AIInteractionLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractionLog to fetch.
     */
    where: AIInteractionLogWhereUniqueInput
  }

  /**
   * AIInteractionLog findUniqueOrThrow
   */
  export type AIInteractionLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractionLog to fetch.
     */
    where: AIInteractionLogWhereUniqueInput
  }

  /**
   * AIInteractionLog findFirst
   */
  export type AIInteractionLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractionLog to fetch.
     */
    where?: AIInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractionLogs to fetch.
     */
    orderBy?: AIInteractionLogOrderByWithRelationInput | AIInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInteractionLogs.
     */
    cursor?: AIInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInteractionLogs.
     */
    distinct?: AIInteractionLogScalarFieldEnum | AIInteractionLogScalarFieldEnum[]
  }

  /**
   * AIInteractionLog findFirstOrThrow
   */
  export type AIInteractionLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractionLog to fetch.
     */
    where?: AIInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractionLogs to fetch.
     */
    orderBy?: AIInteractionLogOrderByWithRelationInput | AIInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIInteractionLogs.
     */
    cursor?: AIInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractionLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIInteractionLogs.
     */
    distinct?: AIInteractionLogScalarFieldEnum | AIInteractionLogScalarFieldEnum[]
  }

  /**
   * AIInteractionLog findMany
   */
  export type AIInteractionLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * Filter, which AIInteractionLogs to fetch.
     */
    where?: AIInteractionLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIInteractionLogs to fetch.
     */
    orderBy?: AIInteractionLogOrderByWithRelationInput | AIInteractionLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIInteractionLogs.
     */
    cursor?: AIInteractionLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIInteractionLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIInteractionLogs.
     */
    skip?: number
    distinct?: AIInteractionLogScalarFieldEnum | AIInteractionLogScalarFieldEnum[]
  }

  /**
   * AIInteractionLog create
   */
  export type AIInteractionLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AIInteractionLog.
     */
    data: XOR<AIInteractionLogCreateInput, AIInteractionLogUncheckedCreateInput>
  }

  /**
   * AIInteractionLog createMany
   */
  export type AIInteractionLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIInteractionLogs.
     */
    data: AIInteractionLogCreateManyInput | AIInteractionLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIInteractionLog update
   */
  export type AIInteractionLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AIInteractionLog.
     */
    data: XOR<AIInteractionLogUpdateInput, AIInteractionLogUncheckedUpdateInput>
    /**
     * Choose, which AIInteractionLog to update.
     */
    where: AIInteractionLogWhereUniqueInput
  }

  /**
   * AIInteractionLog updateMany
   */
  export type AIInteractionLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIInteractionLogs.
     */
    data: XOR<AIInteractionLogUpdateManyMutationInput, AIInteractionLogUncheckedUpdateManyInput>
    /**
     * Filter which AIInteractionLogs to update
     */
    where?: AIInteractionLogWhereInput
    /**
     * Limit how many AIInteractionLogs to update.
     */
    limit?: number
  }

  /**
   * AIInteractionLog upsert
   */
  export type AIInteractionLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AIInteractionLog to update in case it exists.
     */
    where: AIInteractionLogWhereUniqueInput
    /**
     * In case the AIInteractionLog found by the `where` argument doesn't exist, create a new AIInteractionLog with this data.
     */
    create: XOR<AIInteractionLogCreateInput, AIInteractionLogUncheckedCreateInput>
    /**
     * In case the AIInteractionLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIInteractionLogUpdateInput, AIInteractionLogUncheckedUpdateInput>
  }

  /**
   * AIInteractionLog delete
   */
  export type AIInteractionLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
    /**
     * Filter which AIInteractionLog to delete.
     */
    where: AIInteractionLogWhereUniqueInput
  }

  /**
   * AIInteractionLog deleteMany
   */
  export type AIInteractionLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIInteractionLogs to delete
     */
    where?: AIInteractionLogWhereInput
    /**
     * Limit how many AIInteractionLogs to delete.
     */
    limit?: number
  }

  /**
   * AIInteractionLog without action
   */
  export type AIInteractionLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIInteractionLog
     */
    select?: AIInteractionLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIInteractionLog
     */
    omit?: AIInteractionLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInteractionLogInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
    joinCode: string | null
    createdAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    name: string | null
    teacherId: number | null
    joinCode: string | null
    createdAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    name: number
    teacherId: number
    joinCode: number
    createdAt: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    joinCode?: true
    createdAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    joinCode?: true
    createdAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    name?: true
    teacherId?: true
    joinCode?: true
    createdAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: number
    name: string
    teacherId: number
    joinCode: string
    createdAt: Date
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    teacherId?: boolean
    joinCode?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Class$membersArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>



  export type ClassSelectScalar = {
    id?: boolean
    name?: boolean
    teacherId?: boolean
    joinCode?: boolean
    createdAt?: boolean
  }

  export type ClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "teacherId" | "joinCode" | "createdAt", ExtArgs["result"]["class"]>
  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Class$membersArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$ClassMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      teacherId: number
      joinCode: string
      createdAt: Date
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Class$membersArgs<ExtArgs> = {}>(args?: Subset<T, Class$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly name: FieldRef<"Class", 'String'>
    readonly teacherId: FieldRef<"Class", 'Int'>
    readonly joinCode: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to update.
     */
    limit?: number
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
    /**
     * Limit how many Classes to delete.
     */
    limit?: number
  }

  /**
   * Class.members
   */
  export type Class$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    where?: ClassMemberWhereInput
    orderBy?: ClassMemberOrderByWithRelationInput | ClassMemberOrderByWithRelationInput[]
    cursor?: ClassMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClassMemberScalarFieldEnum | ClassMemberScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Class
     */
    omit?: ClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model ClassMember
   */

  export type AggregateClassMember = {
    _count: ClassMemberCountAggregateOutputType | null
    _avg: ClassMemberAvgAggregateOutputType | null
    _sum: ClassMemberSumAggregateOutputType | null
    _min: ClassMemberMinAggregateOutputType | null
    _max: ClassMemberMaxAggregateOutputType | null
  }

  export type ClassMemberAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
  }

  export type ClassMemberSumAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
  }

  export type ClassMemberMinAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ClassMemberMaxAggregateOutputType = {
    id: number | null
    classId: number | null
    userId: number | null
    createdAt: Date | null
  }

  export type ClassMemberCountAggregateOutputType = {
    id: number
    classId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ClassMemberAvgAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
  }

  export type ClassMemberSumAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
  }

  export type ClassMemberMinAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    createdAt?: true
  }

  export type ClassMemberMaxAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    createdAt?: true
  }

  export type ClassMemberCountAggregateInputType = {
    id?: true
    classId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ClassMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassMember to aggregate.
     */
    where?: ClassMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMembers to fetch.
     */
    orderBy?: ClassMemberOrderByWithRelationInput | ClassMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClassMembers
    **/
    _count?: true | ClassMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMemberMaxAggregateInputType
  }

  export type GetClassMemberAggregateType<T extends ClassMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateClassMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassMember[P]>
      : GetScalarType<T[P], AggregateClassMember[P]>
  }




  export type ClassMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassMemberWhereInput
    orderBy?: ClassMemberOrderByWithAggregationInput | ClassMemberOrderByWithAggregationInput[]
    by: ClassMemberScalarFieldEnum[] | ClassMemberScalarFieldEnum
    having?: ClassMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassMemberCountAggregateInputType | true
    _avg?: ClassMemberAvgAggregateInputType
    _sum?: ClassMemberSumAggregateInputType
    _min?: ClassMemberMinAggregateInputType
    _max?: ClassMemberMaxAggregateInputType
  }

  export type ClassMemberGroupByOutputType = {
    id: number
    classId: number
    userId: number
    createdAt: Date
    _count: ClassMemberCountAggregateOutputType | null
    _avg: ClassMemberAvgAggregateOutputType | null
    _sum: ClassMemberSumAggregateOutputType | null
    _min: ClassMemberMinAggregateOutputType | null
    _max: ClassMemberMaxAggregateOutputType | null
  }

  type GetClassMemberGroupByPayload<T extends ClassMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ClassMemberGroupByOutputType[P]>
        }
      >
    >


  export type ClassMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    classId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["classMember"]>



  export type ClassMemberSelectScalar = {
    id?: boolean
    classId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ClassMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "classId" | "userId" | "createdAt", ExtArgs["result"]["classMember"]>
  export type ClassMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $ClassMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClassMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      classId: number
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["classMember"]>
    composites: {}
  }

  type ClassMemberGetPayload<S extends boolean | null | undefined | ClassMemberDefaultArgs> = $Result.GetResult<Prisma.$ClassMemberPayload, S>

  type ClassMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassMemberCountAggregateInputType | true
    }

  export interface ClassMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClassMember'], meta: { name: 'ClassMember' } }
    /**
     * Find zero or one ClassMember that matches the filter.
     * @param {ClassMemberFindUniqueArgs} args - Arguments to find a ClassMember
     * @example
     * // Get one ClassMember
     * const classMember = await prisma.classMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassMemberFindUniqueArgs>(args: SelectSubset<T, ClassMemberFindUniqueArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClassMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassMemberFindUniqueOrThrowArgs} args - Arguments to find a ClassMember
     * @example
     * // Get one ClassMember
     * const classMember = await prisma.classMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberFindFirstArgs} args - Arguments to find a ClassMember
     * @example
     * // Get one ClassMember
     * const classMember = await prisma.classMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassMemberFindFirstArgs>(args?: SelectSubset<T, ClassMemberFindFirstArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClassMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberFindFirstOrThrowArgs} args - Arguments to find a ClassMember
     * @example
     * // Get one ClassMember
     * const classMember = await prisma.classMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClassMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClassMembers
     * const classMembers = await prisma.classMember.findMany()
     * 
     * // Get first 10 ClassMembers
     * const classMembers = await prisma.classMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classMemberWithIdOnly = await prisma.classMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassMemberFindManyArgs>(args?: SelectSubset<T, ClassMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClassMember.
     * @param {ClassMemberCreateArgs} args - Arguments to create a ClassMember.
     * @example
     * // Create one ClassMember
     * const ClassMember = await prisma.classMember.create({
     *   data: {
     *     // ... data to create a ClassMember
     *   }
     * })
     * 
     */
    create<T extends ClassMemberCreateArgs>(args: SelectSubset<T, ClassMemberCreateArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClassMembers.
     * @param {ClassMemberCreateManyArgs} args - Arguments to create many ClassMembers.
     * @example
     * // Create many ClassMembers
     * const classMember = await prisma.classMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassMemberCreateManyArgs>(args?: SelectSubset<T, ClassMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ClassMember.
     * @param {ClassMemberDeleteArgs} args - Arguments to delete one ClassMember.
     * @example
     * // Delete one ClassMember
     * const ClassMember = await prisma.classMember.delete({
     *   where: {
     *     // ... filter to delete one ClassMember
     *   }
     * })
     * 
     */
    delete<T extends ClassMemberDeleteArgs>(args: SelectSubset<T, ClassMemberDeleteArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClassMember.
     * @param {ClassMemberUpdateArgs} args - Arguments to update one ClassMember.
     * @example
     * // Update one ClassMember
     * const classMember = await prisma.classMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassMemberUpdateArgs>(args: SelectSubset<T, ClassMemberUpdateArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClassMembers.
     * @param {ClassMemberDeleteManyArgs} args - Arguments to filter ClassMembers to delete.
     * @example
     * // Delete a few ClassMembers
     * const { count } = await prisma.classMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassMemberDeleteManyArgs>(args?: SelectSubset<T, ClassMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClassMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClassMembers
     * const classMember = await prisma.classMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassMemberUpdateManyArgs>(args: SelectSubset<T, ClassMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClassMember.
     * @param {ClassMemberUpsertArgs} args - Arguments to update or create a ClassMember.
     * @example
     * // Update or create a ClassMember
     * const classMember = await prisma.classMember.upsert({
     *   create: {
     *     // ... data to create a ClassMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClassMember we want to update
     *   }
     * })
     */
    upsert<T extends ClassMemberUpsertArgs>(args: SelectSubset<T, ClassMemberUpsertArgs<ExtArgs>>): Prisma__ClassMemberClient<$Result.GetResult<Prisma.$ClassMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClassMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberCountArgs} args - Arguments to filter ClassMembers to count.
     * @example
     * // Count the number of ClassMembers
     * const count = await prisma.classMember.count({
     *   where: {
     *     // ... the filter for the ClassMembers we want to count
     *   }
     * })
    **/
    count<T extends ClassMemberCountArgs>(
      args?: Subset<T, ClassMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClassMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassMemberAggregateArgs>(args: Subset<T, ClassMemberAggregateArgs>): Prisma.PrismaPromise<GetClassMemberAggregateType<T>>

    /**
     * Group by ClassMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassMemberGroupByArgs['orderBy'] }
        : { orderBy?: ClassMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClassMember model
   */
  readonly fields: ClassMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClassMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClassMember model
   */
  interface ClassMemberFieldRefs {
    readonly id: FieldRef<"ClassMember", 'Int'>
    readonly classId: FieldRef<"ClassMember", 'Int'>
    readonly userId: FieldRef<"ClassMember", 'Int'>
    readonly createdAt: FieldRef<"ClassMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClassMember findUnique
   */
  export type ClassMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassMember to fetch.
     */
    where: ClassMemberWhereUniqueInput
  }

  /**
   * ClassMember findUniqueOrThrow
   */
  export type ClassMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassMember to fetch.
     */
    where: ClassMemberWhereUniqueInput
  }

  /**
   * ClassMember findFirst
   */
  export type ClassMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassMember to fetch.
     */
    where?: ClassMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMembers to fetch.
     */
    orderBy?: ClassMemberOrderByWithRelationInput | ClassMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassMembers.
     */
    cursor?: ClassMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassMembers.
     */
    distinct?: ClassMemberScalarFieldEnum | ClassMemberScalarFieldEnum[]
  }

  /**
   * ClassMember findFirstOrThrow
   */
  export type ClassMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassMember to fetch.
     */
    where?: ClassMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMembers to fetch.
     */
    orderBy?: ClassMemberOrderByWithRelationInput | ClassMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClassMembers.
     */
    cursor?: ClassMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClassMembers.
     */
    distinct?: ClassMemberScalarFieldEnum | ClassMemberScalarFieldEnum[]
  }

  /**
   * ClassMember findMany
   */
  export type ClassMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * Filter, which ClassMembers to fetch.
     */
    where?: ClassMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClassMembers to fetch.
     */
    orderBy?: ClassMemberOrderByWithRelationInput | ClassMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClassMembers.
     */
    cursor?: ClassMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClassMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClassMembers.
     */
    skip?: number
    distinct?: ClassMemberScalarFieldEnum | ClassMemberScalarFieldEnum[]
  }

  /**
   * ClassMember create
   */
  export type ClassMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ClassMember.
     */
    data: XOR<ClassMemberCreateInput, ClassMemberUncheckedCreateInput>
  }

  /**
   * ClassMember createMany
   */
  export type ClassMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClassMembers.
     */
    data: ClassMemberCreateManyInput | ClassMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClassMember update
   */
  export type ClassMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ClassMember.
     */
    data: XOR<ClassMemberUpdateInput, ClassMemberUncheckedUpdateInput>
    /**
     * Choose, which ClassMember to update.
     */
    where: ClassMemberWhereUniqueInput
  }

  /**
   * ClassMember updateMany
   */
  export type ClassMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClassMembers.
     */
    data: XOR<ClassMemberUpdateManyMutationInput, ClassMemberUncheckedUpdateManyInput>
    /**
     * Filter which ClassMembers to update
     */
    where?: ClassMemberWhereInput
    /**
     * Limit how many ClassMembers to update.
     */
    limit?: number
  }

  /**
   * ClassMember upsert
   */
  export type ClassMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ClassMember to update in case it exists.
     */
    where: ClassMemberWhereUniqueInput
    /**
     * In case the ClassMember found by the `where` argument doesn't exist, create a new ClassMember with this data.
     */
    create: XOR<ClassMemberCreateInput, ClassMemberUncheckedCreateInput>
    /**
     * In case the ClassMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassMemberUpdateInput, ClassMemberUncheckedUpdateInput>
  }

  /**
   * ClassMember delete
   */
  export type ClassMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
    /**
     * Filter which ClassMember to delete.
     */
    where: ClassMemberWhereUniqueInput
  }

  /**
   * ClassMember deleteMany
   */
  export type ClassMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClassMembers to delete
     */
    where?: ClassMemberWhereInput
    /**
     * Limit how many ClassMembers to delete.
     */
    limit?: number
  }

  /**
   * ClassMember without action
   */
  export type ClassMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassMember
     */
    select?: ClassMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClassMember
     */
    omit?: ClassMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassMemberInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExperimentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    description: 'description',
    sceneAssetPath: 'sceneAssetPath',
    version: 'version',
    createdAt: 'createdAt'
  };

  export type ExperimentScalarFieldEnum = (typeof ExperimentScalarFieldEnum)[keyof typeof ExperimentScalarFieldEnum]


  export const StudentExperimentLogScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    experimentId: 'experimentId',
    startTime: 'startTime',
    endTime: 'endTime',
    completionStatus: 'completionStatus',
    recordedData: 'recordedData',
    actionsLog: 'actionsLog'
  };

  export type StudentExperimentLogScalarFieldEnum = (typeof StudentExperimentLogScalarFieldEnum)[keyof typeof StudentExperimentLogScalarFieldEnum]


  export const AIInteractionLogScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    experimentId: 'experimentId',
    sessionId: 'sessionId',
    userQuery: 'userQuery',
    aiResponse: 'aiResponse',
    contextSnapshot: 'contextSnapshot',
    createdAt: 'createdAt'
  };

  export type AIInteractionLogScalarFieldEnum = (typeof AIInteractionLogScalarFieldEnum)[keyof typeof AIInteractionLogScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    name: 'name',
    teacherId: 'teacherId',
    joinCode: 'joinCode',
    createdAt: 'createdAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const ClassMemberScalarFieldEnum: {
    id: 'id',
    classId: 'classId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ClassMemberScalarFieldEnum = (typeof ClassMemberScalarFieldEnum)[keyof typeof ClassMemberScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    fullName: 'fullName',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ExperimentOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    sceneAssetPath: 'sceneAssetPath',
    version: 'version'
  };

  export type ExperimentOrderByRelevanceFieldEnum = (typeof ExperimentOrderByRelevanceFieldEnum)[keyof typeof ExperimentOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const StudentExperimentLogOrderByRelevanceFieldEnum: {
    completionStatus: 'completionStatus'
  };

  export type StudentExperimentLogOrderByRelevanceFieldEnum = (typeof StudentExperimentLogOrderByRelevanceFieldEnum)[keyof typeof StudentExperimentLogOrderByRelevanceFieldEnum]


  export const AIInteractionLogOrderByRelevanceFieldEnum: {
    sessionId: 'sessionId',
    userQuery: 'userQuery',
    aiResponse: 'aiResponse'
  };

  export type AIInteractionLogOrderByRelevanceFieldEnum = (typeof AIInteractionLogOrderByRelevanceFieldEnum)[keyof typeof AIInteractionLogOrderByRelevanceFieldEnum]


  export const ClassOrderByRelevanceFieldEnum: {
    name: 'name',
    joinCode: 'joinCode'
  };

  export type ClassOrderByRelevanceFieldEnum = (typeof ClassOrderByRelevanceFieldEnum)[keyof typeof ClassOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Subject'
   */
  export type EnumSubjectFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Subject'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    experiments?: StudentExperimentLogListRelationFilter
    aiLogs?: AIInteractionLogListRelationFilter
    classes?: ClassMemberListRelationFilter
    teachingClasses?: ClassListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    experiments?: StudentExperimentLogOrderByRelationAggregateInput
    aiLogs?: AIInteractionLogOrderByRelationAggregateInput
    classes?: ClassMemberOrderByRelationAggregateInput
    teachingClasses?: ClassOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    experiments?: StudentExperimentLogListRelationFilter
    aiLogs?: AIInteractionLogListRelationFilter
    classes?: ClassMemberListRelationFilter
    teachingClasses?: ClassListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ExperimentWhereInput = {
    AND?: ExperimentWhereInput | ExperimentWhereInput[]
    OR?: ExperimentWhereInput[]
    NOT?: ExperimentWhereInput | ExperimentWhereInput[]
    id?: IntFilter<"Experiment"> | number
    name?: StringFilter<"Experiment"> | string
    subject?: EnumSubjectFilter<"Experiment"> | $Enums.Subject
    description?: StringNullableFilter<"Experiment"> | string | null
    sceneAssetPath?: StringFilter<"Experiment"> | string
    version?: StringNullableFilter<"Experiment"> | string | null
    createdAt?: DateTimeFilter<"Experiment"> | Date | string
    logs?: StudentExperimentLogListRelationFilter
    aiLogs?: AIInteractionLogListRelationFilter
  }

  export type ExperimentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    description?: SortOrderInput | SortOrder
    sceneAssetPath?: SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    logs?: StudentExperimentLogOrderByRelationAggregateInput
    aiLogs?: AIInteractionLogOrderByRelationAggregateInput
    _relevance?: ExperimentOrderByRelevanceInput
  }

  export type ExperimentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperimentWhereInput | ExperimentWhereInput[]
    OR?: ExperimentWhereInput[]
    NOT?: ExperimentWhereInput | ExperimentWhereInput[]
    name?: StringFilter<"Experiment"> | string
    subject?: EnumSubjectFilter<"Experiment"> | $Enums.Subject
    description?: StringNullableFilter<"Experiment"> | string | null
    sceneAssetPath?: StringFilter<"Experiment"> | string
    version?: StringNullableFilter<"Experiment"> | string | null
    createdAt?: DateTimeFilter<"Experiment"> | Date | string
    logs?: StudentExperimentLogListRelationFilter
    aiLogs?: AIInteractionLogListRelationFilter
  }, "id">

  export type ExperimentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    description?: SortOrderInput | SortOrder
    sceneAssetPath?: SortOrder
    version?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExperimentCountOrderByAggregateInput
    _avg?: ExperimentAvgOrderByAggregateInput
    _max?: ExperimentMaxOrderByAggregateInput
    _min?: ExperimentMinOrderByAggregateInput
    _sum?: ExperimentSumOrderByAggregateInput
  }

  export type ExperimentScalarWhereWithAggregatesInput = {
    AND?: ExperimentScalarWhereWithAggregatesInput | ExperimentScalarWhereWithAggregatesInput[]
    OR?: ExperimentScalarWhereWithAggregatesInput[]
    NOT?: ExperimentScalarWhereWithAggregatesInput | ExperimentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Experiment"> | number
    name?: StringWithAggregatesFilter<"Experiment"> | string
    subject?: EnumSubjectWithAggregatesFilter<"Experiment"> | $Enums.Subject
    description?: StringNullableWithAggregatesFilter<"Experiment"> | string | null
    sceneAssetPath?: StringWithAggregatesFilter<"Experiment"> | string
    version?: StringNullableWithAggregatesFilter<"Experiment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Experiment"> | Date | string
  }

  export type StudentExperimentLogWhereInput = {
    AND?: StudentExperimentLogWhereInput | StudentExperimentLogWhereInput[]
    OR?: StudentExperimentLogWhereInput[]
    NOT?: StudentExperimentLogWhereInput | StudentExperimentLogWhereInput[]
    id?: IntFilter<"StudentExperimentLog"> | number
    studentId?: IntFilter<"StudentExperimentLog"> | number
    experimentId?: IntFilter<"StudentExperimentLog"> | number
    startTime?: DateTimeFilter<"StudentExperimentLog"> | Date | string
    endTime?: DateTimeNullableFilter<"StudentExperimentLog"> | Date | string | null
    completionStatus?: StringFilter<"StudentExperimentLog"> | string
    recordedData?: JsonNullableFilter<"StudentExperimentLog">
    actionsLog?: JsonNullableFilter<"StudentExperimentLog">
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    experiment?: XOR<ExperimentScalarRelationFilter, ExperimentWhereInput>
  }

  export type StudentExperimentLogOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    completionStatus?: SortOrder
    recordedData?: SortOrderInput | SortOrder
    actionsLog?: SortOrderInput | SortOrder
    student?: UserOrderByWithRelationInput
    experiment?: ExperimentOrderByWithRelationInput
    _relevance?: StudentExperimentLogOrderByRelevanceInput
  }

  export type StudentExperimentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentExperimentLogWhereInput | StudentExperimentLogWhereInput[]
    OR?: StudentExperimentLogWhereInput[]
    NOT?: StudentExperimentLogWhereInput | StudentExperimentLogWhereInput[]
    studentId?: IntFilter<"StudentExperimentLog"> | number
    experimentId?: IntFilter<"StudentExperimentLog"> | number
    startTime?: DateTimeFilter<"StudentExperimentLog"> | Date | string
    endTime?: DateTimeNullableFilter<"StudentExperimentLog"> | Date | string | null
    completionStatus?: StringFilter<"StudentExperimentLog"> | string
    recordedData?: JsonNullableFilter<"StudentExperimentLog">
    actionsLog?: JsonNullableFilter<"StudentExperimentLog">
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    experiment?: XOR<ExperimentScalarRelationFilter, ExperimentWhereInput>
  }, "id">

  export type StudentExperimentLogOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    completionStatus?: SortOrder
    recordedData?: SortOrderInput | SortOrder
    actionsLog?: SortOrderInput | SortOrder
    _count?: StudentExperimentLogCountOrderByAggregateInput
    _avg?: StudentExperimentLogAvgOrderByAggregateInput
    _max?: StudentExperimentLogMaxOrderByAggregateInput
    _min?: StudentExperimentLogMinOrderByAggregateInput
    _sum?: StudentExperimentLogSumOrderByAggregateInput
  }

  export type StudentExperimentLogScalarWhereWithAggregatesInput = {
    AND?: StudentExperimentLogScalarWhereWithAggregatesInput | StudentExperimentLogScalarWhereWithAggregatesInput[]
    OR?: StudentExperimentLogScalarWhereWithAggregatesInput[]
    NOT?: StudentExperimentLogScalarWhereWithAggregatesInput | StudentExperimentLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentExperimentLog"> | number
    studentId?: IntWithAggregatesFilter<"StudentExperimentLog"> | number
    experimentId?: IntWithAggregatesFilter<"StudentExperimentLog"> | number
    startTime?: DateTimeWithAggregatesFilter<"StudentExperimentLog"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"StudentExperimentLog"> | Date | string | null
    completionStatus?: StringWithAggregatesFilter<"StudentExperimentLog"> | string
    recordedData?: JsonNullableWithAggregatesFilter<"StudentExperimentLog">
    actionsLog?: JsonNullableWithAggregatesFilter<"StudentExperimentLog">
  }

  export type AIInteractionLogWhereInput = {
    AND?: AIInteractionLogWhereInput | AIInteractionLogWhereInput[]
    OR?: AIInteractionLogWhereInput[]
    NOT?: AIInteractionLogWhereInput | AIInteractionLogWhereInput[]
    id?: IntFilter<"AIInteractionLog"> | number
    studentId?: IntFilter<"AIInteractionLog"> | number
    experimentId?: IntFilter<"AIInteractionLog"> | number
    sessionId?: StringNullableFilter<"AIInteractionLog"> | string | null
    userQuery?: StringFilter<"AIInteractionLog"> | string
    aiResponse?: StringFilter<"AIInteractionLog"> | string
    contextSnapshot?: JsonNullableFilter<"AIInteractionLog">
    createdAt?: DateTimeFilter<"AIInteractionLog"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    experiment?: XOR<ExperimentScalarRelationFilter, ExperimentWhereInput>
  }

  export type AIInteractionLogOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    contextSnapshot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    experiment?: ExperimentOrderByWithRelationInput
    _relevance?: AIInteractionLogOrderByRelevanceInput
  }

  export type AIInteractionLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AIInteractionLogWhereInput | AIInteractionLogWhereInput[]
    OR?: AIInteractionLogWhereInput[]
    NOT?: AIInteractionLogWhereInput | AIInteractionLogWhereInput[]
    studentId?: IntFilter<"AIInteractionLog"> | number
    experimentId?: IntFilter<"AIInteractionLog"> | number
    sessionId?: StringNullableFilter<"AIInteractionLog"> | string | null
    userQuery?: StringFilter<"AIInteractionLog"> | string
    aiResponse?: StringFilter<"AIInteractionLog"> | string
    contextSnapshot?: JsonNullableFilter<"AIInteractionLog">
    createdAt?: DateTimeFilter<"AIInteractionLog"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    experiment?: XOR<ExperimentScalarRelationFilter, ExperimentWhereInput>
  }, "id">

  export type AIInteractionLogOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    contextSnapshot?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AIInteractionLogCountOrderByAggregateInput
    _avg?: AIInteractionLogAvgOrderByAggregateInput
    _max?: AIInteractionLogMaxOrderByAggregateInput
    _min?: AIInteractionLogMinOrderByAggregateInput
    _sum?: AIInteractionLogSumOrderByAggregateInput
  }

  export type AIInteractionLogScalarWhereWithAggregatesInput = {
    AND?: AIInteractionLogScalarWhereWithAggregatesInput | AIInteractionLogScalarWhereWithAggregatesInput[]
    OR?: AIInteractionLogScalarWhereWithAggregatesInput[]
    NOT?: AIInteractionLogScalarWhereWithAggregatesInput | AIInteractionLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AIInteractionLog"> | number
    studentId?: IntWithAggregatesFilter<"AIInteractionLog"> | number
    experimentId?: IntWithAggregatesFilter<"AIInteractionLog"> | number
    sessionId?: StringNullableWithAggregatesFilter<"AIInteractionLog"> | string | null
    userQuery?: StringWithAggregatesFilter<"AIInteractionLog"> | string
    aiResponse?: StringWithAggregatesFilter<"AIInteractionLog"> | string
    contextSnapshot?: JsonNullableWithAggregatesFilter<"AIInteractionLog">
    createdAt?: DateTimeWithAggregatesFilter<"AIInteractionLog"> | Date | string
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    name?: StringFilter<"Class"> | string
    teacherId?: IntFilter<"Class"> | number
    joinCode?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ClassMemberListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    joinCode?: SortOrder
    createdAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    members?: ClassMemberOrderByRelationAggregateInput
    _relevance?: ClassOrderByRelevanceInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    joinCode?: string
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    teacherId?: IntFilter<"Class"> | number
    createdAt?: DateTimeFilter<"Class"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: ClassMemberListRelationFilter
  }, "id" | "joinCode">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    joinCode?: SortOrder
    createdAt?: SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    name?: StringWithAggregatesFilter<"Class"> | string
    teacherId?: IntWithAggregatesFilter<"Class"> | number
    joinCode?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
  }

  export type ClassMemberWhereInput = {
    AND?: ClassMemberWhereInput | ClassMemberWhereInput[]
    OR?: ClassMemberWhereInput[]
    NOT?: ClassMemberWhereInput | ClassMemberWhereInput[]
    id?: IntFilter<"ClassMember"> | number
    classId?: IntFilter<"ClassMember"> | number
    userId?: IntFilter<"ClassMember"> | number
    createdAt?: DateTimeFilter<"ClassMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }

  export type ClassMemberOrderByWithRelationInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type ClassMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassMemberWhereInput | ClassMemberWhereInput[]
    OR?: ClassMemberWhereInput[]
    NOT?: ClassMemberWhereInput | ClassMemberWhereInput[]
    classId?: IntFilter<"ClassMember"> | number
    userId?: IntFilter<"ClassMember"> | number
    createdAt?: DateTimeFilter<"ClassMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    class?: XOR<ClassScalarRelationFilter, ClassWhereInput>
  }, "id">

  export type ClassMemberOrderByWithAggregationInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ClassMemberCountOrderByAggregateInput
    _avg?: ClassMemberAvgOrderByAggregateInput
    _max?: ClassMemberMaxOrderByAggregateInput
    _min?: ClassMemberMinOrderByAggregateInput
    _sum?: ClassMemberSumOrderByAggregateInput
  }

  export type ClassMemberScalarWhereWithAggregatesInput = {
    AND?: ClassMemberScalarWhereWithAggregatesInput | ClassMemberScalarWhereWithAggregatesInput[]
    OR?: ClassMemberScalarWhereWithAggregatesInput[]
    NOT?: ClassMemberScalarWhereWithAggregatesInput | ClassMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ClassMember"> | number
    classId?: IntWithAggregatesFilter<"ClassMember"> | number
    userId?: IntWithAggregatesFilter<"ClassMember"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ClassMember"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogCreateNestedManyWithoutStudentInput
    aiLogs?: AIInteractionLogCreateNestedManyWithoutStudentInput
    classes?: ClassMemberCreateNestedManyWithoutUserInput
    teachingClasses?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogUncheckedCreateNestedManyWithoutStudentInput
    aiLogs?: AIInteractionLogUncheckedCreateNestedManyWithoutStudentInput
    classes?: ClassMemberUncheckedCreateNestedManyWithoutUserInput
    teachingClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUpdateManyWithoutStudentNestedInput
    aiLogs?: AIInteractionLogUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUpdateManyWithoutUserNestedInput
    teachingClasses?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUncheckedUpdateManyWithoutStudentNestedInput
    aiLogs?: AIInteractionLogUncheckedUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUncheckedUpdateManyWithoutUserNestedInput
    teachingClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperimentCreateInput = {
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
    logs?: StudentExperimentLogCreateNestedManyWithoutExperimentInput
    aiLogs?: AIInteractionLogCreateNestedManyWithoutExperimentInput
  }

  export type ExperimentUncheckedCreateInput = {
    id?: number
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
    logs?: StudentExperimentLogUncheckedCreateNestedManyWithoutExperimentInput
    aiLogs?: AIInteractionLogUncheckedCreateNestedManyWithoutExperimentInput
  }

  export type ExperimentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: StudentExperimentLogUpdateManyWithoutExperimentNestedInput
    aiLogs?: AIInteractionLogUpdateManyWithoutExperimentNestedInput
  }

  export type ExperimentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: StudentExperimentLogUncheckedUpdateManyWithoutExperimentNestedInput
    aiLogs?: AIInteractionLogUncheckedUpdateManyWithoutExperimentNestedInput
  }

  export type ExperimentCreateManyInput = {
    id?: number
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
  }

  export type ExperimentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperimentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExperimentLogCreateInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
    student: UserCreateNestedOneWithoutExperimentsInput
    experiment: ExperimentCreateNestedOneWithoutLogsInput
  }

  export type StudentExperimentLogUncheckedCreateInput = {
    id?: number
    studentId: number
    experimentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
    student?: UserUpdateOneRequiredWithoutExperimentsNestedInput
    experiment?: ExperimentUpdateOneRequiredWithoutLogsNestedInput
  }

  export type StudentExperimentLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogCreateManyInput = {
    id?: number
    studentId: number
    experimentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIInteractionLogCreateInput = {
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutAiLogsInput
    experiment: ExperimentCreateNestedOneWithoutAiLogsInput
  }

  export type AIInteractionLogUncheckedCreateInput = {
    id?: number
    studentId: number
    experimentId: number
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIInteractionLogUpdateInput = {
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAiLogsNestedInput
    experiment?: ExperimentUpdateOneRequiredWithoutAiLogsNestedInput
  }

  export type AIInteractionLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionLogCreateManyInput = {
    id?: number
    studentId: number
    experimentId: number
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIInteractionLogUpdateManyMutationInput = {
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassCreateInput = {
    name: string
    joinCode: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeachingClassesInput
    members?: ClassMemberCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    name: string
    teacherId: number
    joinCode: string
    createdAt?: Date | string
    members?: ClassMemberUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeachingClassesNestedInput
    members?: ClassMemberUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ClassMemberUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: number
    name: string
    teacherId: number
    joinCode: string
    createdAt?: Date | string
  }

  export type ClassUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClassesInput
    class: ClassCreateNestedOneWithoutMembersInput
  }

  export type ClassMemberUncheckedCreateInput = {
    id?: number
    classId: number
    userId: number
    createdAt?: Date | string
  }

  export type ClassMemberUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassesNestedInput
    class?: ClassUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ClassMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberCreateManyInput = {
    id?: number
    classId: number
    userId: number
    createdAt?: Date | string
  }

  export type ClassMemberUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentExperimentLogListRelationFilter = {
    every?: StudentExperimentLogWhereInput
    some?: StudentExperimentLogWhereInput
    none?: StudentExperimentLogWhereInput
  }

  export type AIInteractionLogListRelationFilter = {
    every?: AIInteractionLogWhereInput
    some?: AIInteractionLogWhereInput
    none?: AIInteractionLogWhereInput
  }

  export type ClassMemberListRelationFilter = {
    every?: ClassMemberWhereInput
    some?: ClassMemberWhereInput
    none?: ClassMemberWhereInput
  }

  export type ClassListRelationFilter = {
    every?: ClassWhereInput
    some?: ClassWhereInput
    none?: ClassWhereInput
  }

  export type StudentExperimentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIInteractionLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSubjectFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[]
    notIn?: $Enums.Subject[]
    not?: NestedEnumSubjectFilter<$PrismaModel> | $Enums.Subject
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExperimentOrderByRelevanceInput = {
    fields: ExperimentOrderByRelevanceFieldEnum | ExperimentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExperimentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    sceneAssetPath?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type ExperimentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperimentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    sceneAssetPath?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type ExperimentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    description?: SortOrder
    sceneAssetPath?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type ExperimentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSubjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[]
    notIn?: $Enums.Subject[]
    not?: NestedEnumSubjectWithAggregatesFilter<$PrismaModel> | $Enums.Subject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFilter<$PrismaModel>
    _max?: NestedEnumSubjectFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExperimentScalarRelationFilter = {
    is?: ExperimentWhereInput
    isNot?: ExperimentWhereInput
  }

  export type StudentExperimentLogOrderByRelevanceInput = {
    fields: StudentExperimentLogOrderByRelevanceFieldEnum | StudentExperimentLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentExperimentLogCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    completionStatus?: SortOrder
    recordedData?: SortOrder
    actionsLog?: SortOrder
  }

  export type StudentExperimentLogAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
  }

  export type StudentExperimentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    completionStatus?: SortOrder
  }

  export type StudentExperimentLogMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    completionStatus?: SortOrder
  }

  export type StudentExperimentLogSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AIInteractionLogOrderByRelevanceInput = {
    fields: AIInteractionLogOrderByRelevanceFieldEnum | AIInteractionLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AIInteractionLogCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    sessionId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    contextSnapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type AIInteractionLogAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
  }

  export type AIInteractionLogMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    sessionId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type AIInteractionLogMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
    sessionId?: SortOrder
    userQuery?: SortOrder
    aiResponse?: SortOrder
    createdAt?: SortOrder
  }

  export type AIInteractionLogSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    experimentId?: SortOrder
  }

  export type ClassOrderByRelevanceInput = {
    fields: ClassOrderByRelevanceFieldEnum | ClassOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    joinCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    joinCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    teacherId?: SortOrder
    joinCode?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type ClassScalarRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type ClassMemberCountOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
  }

  export type ClassMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMemberMinOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ClassMemberSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    userId?: SortOrder
  }

  export type StudentExperimentLogCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentExperimentLogCreateWithoutStudentInput, StudentExperimentLogUncheckedCreateWithoutStudentInput> | StudentExperimentLogCreateWithoutStudentInput[] | StudentExperimentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutStudentInput | StudentExperimentLogCreateOrConnectWithoutStudentInput[]
    createMany?: StudentExperimentLogCreateManyStudentInputEnvelope
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
  }

  export type AIInteractionLogCreateNestedManyWithoutStudentInput = {
    create?: XOR<AIInteractionLogCreateWithoutStudentInput, AIInteractionLogUncheckedCreateWithoutStudentInput> | AIInteractionLogCreateWithoutStudentInput[] | AIInteractionLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutStudentInput | AIInteractionLogCreateOrConnectWithoutStudentInput[]
    createMany?: AIInteractionLogCreateManyStudentInputEnvelope
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
  }

  export type ClassMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassMemberCreateWithoutUserInput, ClassMemberUncheckedCreateWithoutUserInput> | ClassMemberCreateWithoutUserInput[] | ClassMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutUserInput | ClassMemberCreateOrConnectWithoutUserInput[]
    createMany?: ClassMemberCreateManyUserInputEnvelope
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
  }

  export type ClassCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type StudentExperimentLogUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentExperimentLogCreateWithoutStudentInput, StudentExperimentLogUncheckedCreateWithoutStudentInput> | StudentExperimentLogCreateWithoutStudentInput[] | StudentExperimentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutStudentInput | StudentExperimentLogCreateOrConnectWithoutStudentInput[]
    createMany?: StudentExperimentLogCreateManyStudentInputEnvelope
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
  }

  export type AIInteractionLogUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AIInteractionLogCreateWithoutStudentInput, AIInteractionLogUncheckedCreateWithoutStudentInput> | AIInteractionLogCreateWithoutStudentInput[] | AIInteractionLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutStudentInput | AIInteractionLogCreateOrConnectWithoutStudentInput[]
    createMany?: AIInteractionLogCreateManyStudentInputEnvelope
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
  }

  export type ClassMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClassMemberCreateWithoutUserInput, ClassMemberUncheckedCreateWithoutUserInput> | ClassMemberCreateWithoutUserInput[] | ClassMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutUserInput | ClassMemberCreateOrConnectWithoutUserInput[]
    createMany?: ClassMemberCreateManyUserInputEnvelope
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
  }

  export type ClassUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentExperimentLogUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentExperimentLogCreateWithoutStudentInput, StudentExperimentLogUncheckedCreateWithoutStudentInput> | StudentExperimentLogCreateWithoutStudentInput[] | StudentExperimentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutStudentInput | StudentExperimentLogCreateOrConnectWithoutStudentInput[]
    upsert?: StudentExperimentLogUpsertWithWhereUniqueWithoutStudentInput | StudentExperimentLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentExperimentLogCreateManyStudentInputEnvelope
    set?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    disconnect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    delete?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    update?: StudentExperimentLogUpdateWithWhereUniqueWithoutStudentInput | StudentExperimentLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentExperimentLogUpdateManyWithWhereWithoutStudentInput | StudentExperimentLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentExperimentLogScalarWhereInput | StudentExperimentLogScalarWhereInput[]
  }

  export type AIInteractionLogUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AIInteractionLogCreateWithoutStudentInput, AIInteractionLogUncheckedCreateWithoutStudentInput> | AIInteractionLogCreateWithoutStudentInput[] | AIInteractionLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutStudentInput | AIInteractionLogCreateOrConnectWithoutStudentInput[]
    upsert?: AIInteractionLogUpsertWithWhereUniqueWithoutStudentInput | AIInteractionLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AIInteractionLogCreateManyStudentInputEnvelope
    set?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    disconnect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    delete?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    update?: AIInteractionLogUpdateWithWhereUniqueWithoutStudentInput | AIInteractionLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AIInteractionLogUpdateManyWithWhereWithoutStudentInput | AIInteractionLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AIInteractionLogScalarWhereInput | AIInteractionLogScalarWhereInput[]
  }

  export type ClassMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassMemberCreateWithoutUserInput, ClassMemberUncheckedCreateWithoutUserInput> | ClassMemberCreateWithoutUserInput[] | ClassMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutUserInput | ClassMemberCreateOrConnectWithoutUserInput[]
    upsert?: ClassMemberUpsertWithWhereUniqueWithoutUserInput | ClassMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassMemberCreateManyUserInputEnvelope
    set?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    disconnect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    delete?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    update?: ClassMemberUpdateWithWhereUniqueWithoutUserInput | ClassMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassMemberUpdateManyWithWhereWithoutUserInput | ClassMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassMemberScalarWhereInput | ClassMemberScalarWhereInput[]
  }

  export type ClassUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentExperimentLogUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentExperimentLogCreateWithoutStudentInput, StudentExperimentLogUncheckedCreateWithoutStudentInput> | StudentExperimentLogCreateWithoutStudentInput[] | StudentExperimentLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutStudentInput | StudentExperimentLogCreateOrConnectWithoutStudentInput[]
    upsert?: StudentExperimentLogUpsertWithWhereUniqueWithoutStudentInput | StudentExperimentLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentExperimentLogCreateManyStudentInputEnvelope
    set?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    disconnect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    delete?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    update?: StudentExperimentLogUpdateWithWhereUniqueWithoutStudentInput | StudentExperimentLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentExperimentLogUpdateManyWithWhereWithoutStudentInput | StudentExperimentLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentExperimentLogScalarWhereInput | StudentExperimentLogScalarWhereInput[]
  }

  export type AIInteractionLogUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AIInteractionLogCreateWithoutStudentInput, AIInteractionLogUncheckedCreateWithoutStudentInput> | AIInteractionLogCreateWithoutStudentInput[] | AIInteractionLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutStudentInput | AIInteractionLogCreateOrConnectWithoutStudentInput[]
    upsert?: AIInteractionLogUpsertWithWhereUniqueWithoutStudentInput | AIInteractionLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AIInteractionLogCreateManyStudentInputEnvelope
    set?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    disconnect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    delete?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    update?: AIInteractionLogUpdateWithWhereUniqueWithoutStudentInput | AIInteractionLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AIInteractionLogUpdateManyWithWhereWithoutStudentInput | AIInteractionLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AIInteractionLogScalarWhereInput | AIInteractionLogScalarWhereInput[]
  }

  export type ClassMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClassMemberCreateWithoutUserInput, ClassMemberUncheckedCreateWithoutUserInput> | ClassMemberCreateWithoutUserInput[] | ClassMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutUserInput | ClassMemberCreateOrConnectWithoutUserInput[]
    upsert?: ClassMemberUpsertWithWhereUniqueWithoutUserInput | ClassMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClassMemberCreateManyUserInputEnvelope
    set?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    disconnect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    delete?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    update?: ClassMemberUpdateWithWhereUniqueWithoutUserInput | ClassMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClassMemberUpdateManyWithWhereWithoutUserInput | ClassMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClassMemberScalarWhereInput | ClassMemberScalarWhereInput[]
  }

  export type ClassUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput> | ClassCreateWithoutTeacherInput[] | ClassUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherInput | ClassCreateOrConnectWithoutTeacherInput[]
    upsert?: ClassUpsertWithWhereUniqueWithoutTeacherInput | ClassUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ClassCreateManyTeacherInputEnvelope
    set?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    disconnect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    delete?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    connect?: ClassWhereUniqueInput | ClassWhereUniqueInput[]
    update?: ClassUpdateWithWhereUniqueWithoutTeacherInput | ClassUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ClassUpdateManyWithWhereWithoutTeacherInput | ClassUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ClassScalarWhereInput | ClassScalarWhereInput[]
  }

  export type StudentExperimentLogCreateNestedManyWithoutExperimentInput = {
    create?: XOR<StudentExperimentLogCreateWithoutExperimentInput, StudentExperimentLogUncheckedCreateWithoutExperimentInput> | StudentExperimentLogCreateWithoutExperimentInput[] | StudentExperimentLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutExperimentInput | StudentExperimentLogCreateOrConnectWithoutExperimentInput[]
    createMany?: StudentExperimentLogCreateManyExperimentInputEnvelope
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
  }

  export type AIInteractionLogCreateNestedManyWithoutExperimentInput = {
    create?: XOR<AIInteractionLogCreateWithoutExperimentInput, AIInteractionLogUncheckedCreateWithoutExperimentInput> | AIInteractionLogCreateWithoutExperimentInput[] | AIInteractionLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutExperimentInput | AIInteractionLogCreateOrConnectWithoutExperimentInput[]
    createMany?: AIInteractionLogCreateManyExperimentInputEnvelope
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
  }

  export type StudentExperimentLogUncheckedCreateNestedManyWithoutExperimentInput = {
    create?: XOR<StudentExperimentLogCreateWithoutExperimentInput, StudentExperimentLogUncheckedCreateWithoutExperimentInput> | StudentExperimentLogCreateWithoutExperimentInput[] | StudentExperimentLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutExperimentInput | StudentExperimentLogCreateOrConnectWithoutExperimentInput[]
    createMany?: StudentExperimentLogCreateManyExperimentInputEnvelope
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
  }

  export type AIInteractionLogUncheckedCreateNestedManyWithoutExperimentInput = {
    create?: XOR<AIInteractionLogCreateWithoutExperimentInput, AIInteractionLogUncheckedCreateWithoutExperimentInput> | AIInteractionLogCreateWithoutExperimentInput[] | AIInteractionLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutExperimentInput | AIInteractionLogCreateOrConnectWithoutExperimentInput[]
    createMany?: AIInteractionLogCreateManyExperimentInputEnvelope
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
  }

  export type EnumSubjectFieldUpdateOperationsInput = {
    set?: $Enums.Subject
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentExperimentLogUpdateManyWithoutExperimentNestedInput = {
    create?: XOR<StudentExperimentLogCreateWithoutExperimentInput, StudentExperimentLogUncheckedCreateWithoutExperimentInput> | StudentExperimentLogCreateWithoutExperimentInput[] | StudentExperimentLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutExperimentInput | StudentExperimentLogCreateOrConnectWithoutExperimentInput[]
    upsert?: StudentExperimentLogUpsertWithWhereUniqueWithoutExperimentInput | StudentExperimentLogUpsertWithWhereUniqueWithoutExperimentInput[]
    createMany?: StudentExperimentLogCreateManyExperimentInputEnvelope
    set?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    disconnect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    delete?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    update?: StudentExperimentLogUpdateWithWhereUniqueWithoutExperimentInput | StudentExperimentLogUpdateWithWhereUniqueWithoutExperimentInput[]
    updateMany?: StudentExperimentLogUpdateManyWithWhereWithoutExperimentInput | StudentExperimentLogUpdateManyWithWhereWithoutExperimentInput[]
    deleteMany?: StudentExperimentLogScalarWhereInput | StudentExperimentLogScalarWhereInput[]
  }

  export type AIInteractionLogUpdateManyWithoutExperimentNestedInput = {
    create?: XOR<AIInteractionLogCreateWithoutExperimentInput, AIInteractionLogUncheckedCreateWithoutExperimentInput> | AIInteractionLogCreateWithoutExperimentInput[] | AIInteractionLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutExperimentInput | AIInteractionLogCreateOrConnectWithoutExperimentInput[]
    upsert?: AIInteractionLogUpsertWithWhereUniqueWithoutExperimentInput | AIInteractionLogUpsertWithWhereUniqueWithoutExperimentInput[]
    createMany?: AIInteractionLogCreateManyExperimentInputEnvelope
    set?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    disconnect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    delete?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    update?: AIInteractionLogUpdateWithWhereUniqueWithoutExperimentInput | AIInteractionLogUpdateWithWhereUniqueWithoutExperimentInput[]
    updateMany?: AIInteractionLogUpdateManyWithWhereWithoutExperimentInput | AIInteractionLogUpdateManyWithWhereWithoutExperimentInput[]
    deleteMany?: AIInteractionLogScalarWhereInput | AIInteractionLogScalarWhereInput[]
  }

  export type StudentExperimentLogUncheckedUpdateManyWithoutExperimentNestedInput = {
    create?: XOR<StudentExperimentLogCreateWithoutExperimentInput, StudentExperimentLogUncheckedCreateWithoutExperimentInput> | StudentExperimentLogCreateWithoutExperimentInput[] | StudentExperimentLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: StudentExperimentLogCreateOrConnectWithoutExperimentInput | StudentExperimentLogCreateOrConnectWithoutExperimentInput[]
    upsert?: StudentExperimentLogUpsertWithWhereUniqueWithoutExperimentInput | StudentExperimentLogUpsertWithWhereUniqueWithoutExperimentInput[]
    createMany?: StudentExperimentLogCreateManyExperimentInputEnvelope
    set?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    disconnect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    delete?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    connect?: StudentExperimentLogWhereUniqueInput | StudentExperimentLogWhereUniqueInput[]
    update?: StudentExperimentLogUpdateWithWhereUniqueWithoutExperimentInput | StudentExperimentLogUpdateWithWhereUniqueWithoutExperimentInput[]
    updateMany?: StudentExperimentLogUpdateManyWithWhereWithoutExperimentInput | StudentExperimentLogUpdateManyWithWhereWithoutExperimentInput[]
    deleteMany?: StudentExperimentLogScalarWhereInput | StudentExperimentLogScalarWhereInput[]
  }

  export type AIInteractionLogUncheckedUpdateManyWithoutExperimentNestedInput = {
    create?: XOR<AIInteractionLogCreateWithoutExperimentInput, AIInteractionLogUncheckedCreateWithoutExperimentInput> | AIInteractionLogCreateWithoutExperimentInput[] | AIInteractionLogUncheckedCreateWithoutExperimentInput[]
    connectOrCreate?: AIInteractionLogCreateOrConnectWithoutExperimentInput | AIInteractionLogCreateOrConnectWithoutExperimentInput[]
    upsert?: AIInteractionLogUpsertWithWhereUniqueWithoutExperimentInput | AIInteractionLogUpsertWithWhereUniqueWithoutExperimentInput[]
    createMany?: AIInteractionLogCreateManyExperimentInputEnvelope
    set?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    disconnect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    delete?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    connect?: AIInteractionLogWhereUniqueInput | AIInteractionLogWhereUniqueInput[]
    update?: AIInteractionLogUpdateWithWhereUniqueWithoutExperimentInput | AIInteractionLogUpdateWithWhereUniqueWithoutExperimentInput[]
    updateMany?: AIInteractionLogUpdateManyWithWhereWithoutExperimentInput | AIInteractionLogUpdateManyWithWhereWithoutExperimentInput[]
    deleteMany?: AIInteractionLogScalarWhereInput | AIInteractionLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExperimentsInput = {
    create?: XOR<UserCreateWithoutExperimentsInput, UserUncheckedCreateWithoutExperimentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperimentsInput
    connect?: UserWhereUniqueInput
  }

  export type ExperimentCreateNestedOneWithoutLogsInput = {
    create?: XOR<ExperimentCreateWithoutLogsInput, ExperimentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExperimentCreateOrConnectWithoutLogsInput
    connect?: ExperimentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutExperimentsNestedInput = {
    create?: XOR<UserCreateWithoutExperimentsInput, UserUncheckedCreateWithoutExperimentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperimentsInput
    upsert?: UserUpsertWithoutExperimentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperimentsInput, UserUpdateWithoutExperimentsInput>, UserUncheckedUpdateWithoutExperimentsInput>
  }

  export type ExperimentUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<ExperimentCreateWithoutLogsInput, ExperimentUncheckedCreateWithoutLogsInput>
    connectOrCreate?: ExperimentCreateOrConnectWithoutLogsInput
    upsert?: ExperimentUpsertWithoutLogsInput
    connect?: ExperimentWhereUniqueInput
    update?: XOR<XOR<ExperimentUpdateToOneWithWhereWithoutLogsInput, ExperimentUpdateWithoutLogsInput>, ExperimentUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutAiLogsInput = {
    create?: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ExperimentCreateNestedOneWithoutAiLogsInput = {
    create?: XOR<ExperimentCreateWithoutAiLogsInput, ExperimentUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: ExperimentCreateOrConnectWithoutAiLogsInput
    connect?: ExperimentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAiLogsNestedInput = {
    create?: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiLogsInput
    upsert?: UserUpsertWithoutAiLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiLogsInput, UserUpdateWithoutAiLogsInput>, UserUncheckedUpdateWithoutAiLogsInput>
  }

  export type ExperimentUpdateOneRequiredWithoutAiLogsNestedInput = {
    create?: XOR<ExperimentCreateWithoutAiLogsInput, ExperimentUncheckedCreateWithoutAiLogsInput>
    connectOrCreate?: ExperimentCreateOrConnectWithoutAiLogsInput
    upsert?: ExperimentUpsertWithoutAiLogsInput
    connect?: ExperimentWhereUniqueInput
    update?: XOR<XOR<ExperimentUpdateToOneWithWhereWithoutAiLogsInput, ExperimentUpdateWithoutAiLogsInput>, ExperimentUncheckedUpdateWithoutAiLogsInput>
  }

  export type UserCreateNestedOneWithoutTeachingClassesInput = {
    create?: XOR<UserCreateWithoutTeachingClassesInput, UserUncheckedCreateWithoutTeachingClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeachingClassesInput
    connect?: UserWhereUniqueInput
  }

  export type ClassMemberCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassMemberCreateWithoutClassInput, ClassMemberUncheckedCreateWithoutClassInput> | ClassMemberCreateWithoutClassInput[] | ClassMemberUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutClassInput | ClassMemberCreateOrConnectWithoutClassInput[]
    createMany?: ClassMemberCreateManyClassInputEnvelope
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
  }

  export type ClassMemberUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<ClassMemberCreateWithoutClassInput, ClassMemberUncheckedCreateWithoutClassInput> | ClassMemberCreateWithoutClassInput[] | ClassMemberUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutClassInput | ClassMemberCreateOrConnectWithoutClassInput[]
    createMany?: ClassMemberCreateManyClassInputEnvelope
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeachingClassesNestedInput = {
    create?: XOR<UserCreateWithoutTeachingClassesInput, UserUncheckedCreateWithoutTeachingClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeachingClassesInput
    upsert?: UserUpsertWithoutTeachingClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeachingClassesInput, UserUpdateWithoutTeachingClassesInput>, UserUncheckedUpdateWithoutTeachingClassesInput>
  }

  export type ClassMemberUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassMemberCreateWithoutClassInput, ClassMemberUncheckedCreateWithoutClassInput> | ClassMemberCreateWithoutClassInput[] | ClassMemberUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutClassInput | ClassMemberCreateOrConnectWithoutClassInput[]
    upsert?: ClassMemberUpsertWithWhereUniqueWithoutClassInput | ClassMemberUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassMemberCreateManyClassInputEnvelope
    set?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    disconnect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    delete?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    update?: ClassMemberUpdateWithWhereUniqueWithoutClassInput | ClassMemberUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassMemberUpdateManyWithWhereWithoutClassInput | ClassMemberUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassMemberScalarWhereInput | ClassMemberScalarWhereInput[]
  }

  export type ClassMemberUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<ClassMemberCreateWithoutClassInput, ClassMemberUncheckedCreateWithoutClassInput> | ClassMemberCreateWithoutClassInput[] | ClassMemberUncheckedCreateWithoutClassInput[]
    connectOrCreate?: ClassMemberCreateOrConnectWithoutClassInput | ClassMemberCreateOrConnectWithoutClassInput[]
    upsert?: ClassMemberUpsertWithWhereUniqueWithoutClassInput | ClassMemberUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: ClassMemberCreateManyClassInputEnvelope
    set?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    disconnect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    delete?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    connect?: ClassMemberWhereUniqueInput | ClassMemberWhereUniqueInput[]
    update?: ClassMemberUpdateWithWhereUniqueWithoutClassInput | ClassMemberUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: ClassMemberUpdateManyWithWhereWithoutClassInput | ClassMemberUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: ClassMemberScalarWhereInput | ClassMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClassesInput = {
    create?: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassesInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutMembersInput = {
    create?: XOR<ClassCreateWithoutMembersInput, ClassUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMembersInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutClassesNestedInput = {
    create?: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
    connectOrCreate?: UserCreateOrConnectWithoutClassesInput
    upsert?: UserUpsertWithoutClassesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClassesInput, UserUpdateWithoutClassesInput>, UserUncheckedUpdateWithoutClassesInput>
  }

  export type ClassUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ClassCreateWithoutMembersInput, ClassUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMembersInput
    upsert?: ClassUpsertWithoutMembersInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutMembersInput, ClassUpdateWithoutMembersInput>, ClassUncheckedUpdateWithoutMembersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSubjectFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[]
    notIn?: $Enums.Subject[]
    not?: NestedEnumSubjectFilter<$PrismaModel> | $Enums.Subject
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubjectWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Subject | EnumSubjectFieldRefInput<$PrismaModel>
    in?: $Enums.Subject[]
    notIn?: $Enums.Subject[]
    not?: NestedEnumSubjectWithAggregatesFilter<$PrismaModel> | $Enums.Subject
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubjectFilter<$PrismaModel>
    _max?: NestedEnumSubjectFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StudentExperimentLogCreateWithoutStudentInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
    experiment: ExperimentCreateNestedOneWithoutLogsInput
  }

  export type StudentExperimentLogUncheckedCreateWithoutStudentInput = {
    id?: number
    experimentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogCreateOrConnectWithoutStudentInput = {
    where: StudentExperimentLogWhereUniqueInput
    create: XOR<StudentExperimentLogCreateWithoutStudentInput, StudentExperimentLogUncheckedCreateWithoutStudentInput>
  }

  export type StudentExperimentLogCreateManyStudentInputEnvelope = {
    data: StudentExperimentLogCreateManyStudentInput | StudentExperimentLogCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type AIInteractionLogCreateWithoutStudentInput = {
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    experiment: ExperimentCreateNestedOneWithoutAiLogsInput
  }

  export type AIInteractionLogUncheckedCreateWithoutStudentInput = {
    id?: number
    experimentId: number
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIInteractionLogCreateOrConnectWithoutStudentInput = {
    where: AIInteractionLogWhereUniqueInput
    create: XOR<AIInteractionLogCreateWithoutStudentInput, AIInteractionLogUncheckedCreateWithoutStudentInput>
  }

  export type AIInteractionLogCreateManyStudentInputEnvelope = {
    data: AIInteractionLogCreateManyStudentInput | AIInteractionLogCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassMemberCreateWithoutUserInput = {
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutMembersInput
  }

  export type ClassMemberUncheckedCreateWithoutUserInput = {
    id?: number
    classId: number
    createdAt?: Date | string
  }

  export type ClassMemberCreateOrConnectWithoutUserInput = {
    where: ClassMemberWhereUniqueInput
    create: XOR<ClassMemberCreateWithoutUserInput, ClassMemberUncheckedCreateWithoutUserInput>
  }

  export type ClassMemberCreateManyUserInputEnvelope = {
    data: ClassMemberCreateManyUserInput | ClassMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ClassCreateWithoutTeacherInput = {
    name: string
    joinCode: string
    createdAt?: Date | string
    members?: ClassMemberCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    joinCode: string
    createdAt?: Date | string
    members?: ClassMemberUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassCreateManyTeacherInputEnvelope = {
    data: ClassCreateManyTeacherInput | ClassCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type StudentExperimentLogUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentExperimentLogWhereUniqueInput
    update: XOR<StudentExperimentLogUpdateWithoutStudentInput, StudentExperimentLogUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentExperimentLogCreateWithoutStudentInput, StudentExperimentLogUncheckedCreateWithoutStudentInput>
  }

  export type StudentExperimentLogUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentExperimentLogWhereUniqueInput
    data: XOR<StudentExperimentLogUpdateWithoutStudentInput, StudentExperimentLogUncheckedUpdateWithoutStudentInput>
  }

  export type StudentExperimentLogUpdateManyWithWhereWithoutStudentInput = {
    where: StudentExperimentLogScalarWhereInput
    data: XOR<StudentExperimentLogUpdateManyMutationInput, StudentExperimentLogUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentExperimentLogScalarWhereInput = {
    AND?: StudentExperimentLogScalarWhereInput | StudentExperimentLogScalarWhereInput[]
    OR?: StudentExperimentLogScalarWhereInput[]
    NOT?: StudentExperimentLogScalarWhereInput | StudentExperimentLogScalarWhereInput[]
    id?: IntFilter<"StudentExperimentLog"> | number
    studentId?: IntFilter<"StudentExperimentLog"> | number
    experimentId?: IntFilter<"StudentExperimentLog"> | number
    startTime?: DateTimeFilter<"StudentExperimentLog"> | Date | string
    endTime?: DateTimeNullableFilter<"StudentExperimentLog"> | Date | string | null
    completionStatus?: StringFilter<"StudentExperimentLog"> | string
    recordedData?: JsonNullableFilter<"StudentExperimentLog">
    actionsLog?: JsonNullableFilter<"StudentExperimentLog">
  }

  export type AIInteractionLogUpsertWithWhereUniqueWithoutStudentInput = {
    where: AIInteractionLogWhereUniqueInput
    update: XOR<AIInteractionLogUpdateWithoutStudentInput, AIInteractionLogUncheckedUpdateWithoutStudentInput>
    create: XOR<AIInteractionLogCreateWithoutStudentInput, AIInteractionLogUncheckedCreateWithoutStudentInput>
  }

  export type AIInteractionLogUpdateWithWhereUniqueWithoutStudentInput = {
    where: AIInteractionLogWhereUniqueInput
    data: XOR<AIInteractionLogUpdateWithoutStudentInput, AIInteractionLogUncheckedUpdateWithoutStudentInput>
  }

  export type AIInteractionLogUpdateManyWithWhereWithoutStudentInput = {
    where: AIInteractionLogScalarWhereInput
    data: XOR<AIInteractionLogUpdateManyMutationInput, AIInteractionLogUncheckedUpdateManyWithoutStudentInput>
  }

  export type AIInteractionLogScalarWhereInput = {
    AND?: AIInteractionLogScalarWhereInput | AIInteractionLogScalarWhereInput[]
    OR?: AIInteractionLogScalarWhereInput[]
    NOT?: AIInteractionLogScalarWhereInput | AIInteractionLogScalarWhereInput[]
    id?: IntFilter<"AIInteractionLog"> | number
    studentId?: IntFilter<"AIInteractionLog"> | number
    experimentId?: IntFilter<"AIInteractionLog"> | number
    sessionId?: StringNullableFilter<"AIInteractionLog"> | string | null
    userQuery?: StringFilter<"AIInteractionLog"> | string
    aiResponse?: StringFilter<"AIInteractionLog"> | string
    contextSnapshot?: JsonNullableFilter<"AIInteractionLog">
    createdAt?: DateTimeFilter<"AIInteractionLog"> | Date | string
  }

  export type ClassMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ClassMemberWhereUniqueInput
    update: XOR<ClassMemberUpdateWithoutUserInput, ClassMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ClassMemberCreateWithoutUserInput, ClassMemberUncheckedCreateWithoutUserInput>
  }

  export type ClassMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ClassMemberWhereUniqueInput
    data: XOR<ClassMemberUpdateWithoutUserInput, ClassMemberUncheckedUpdateWithoutUserInput>
  }

  export type ClassMemberUpdateManyWithWhereWithoutUserInput = {
    where: ClassMemberScalarWhereInput
    data: XOR<ClassMemberUpdateManyMutationInput, ClassMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ClassMemberScalarWhereInput = {
    AND?: ClassMemberScalarWhereInput | ClassMemberScalarWhereInput[]
    OR?: ClassMemberScalarWhereInput[]
    NOT?: ClassMemberScalarWhereInput | ClassMemberScalarWhereInput[]
    id?: IntFilter<"ClassMember"> | number
    classId?: IntFilter<"ClassMember"> | number
    userId?: IntFilter<"ClassMember"> | number
    createdAt?: DateTimeFilter<"ClassMember"> | Date | string
  }

  export type ClassUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    update: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
    create: XOR<ClassCreateWithoutTeacherInput, ClassUncheckedCreateWithoutTeacherInput>
  }

  export type ClassUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ClassWhereUniqueInput
    data: XOR<ClassUpdateWithoutTeacherInput, ClassUncheckedUpdateWithoutTeacherInput>
  }

  export type ClassUpdateManyWithWhereWithoutTeacherInput = {
    where: ClassScalarWhereInput
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ClassScalarWhereInput = {
    AND?: ClassScalarWhereInput | ClassScalarWhereInput[]
    OR?: ClassScalarWhereInput[]
    NOT?: ClassScalarWhereInput | ClassScalarWhereInput[]
    id?: IntFilter<"Class"> | number
    name?: StringFilter<"Class"> | string
    teacherId?: IntFilter<"Class"> | number
    joinCode?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
  }

  export type StudentExperimentLogCreateWithoutExperimentInput = {
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
    student: UserCreateNestedOneWithoutExperimentsInput
  }

  export type StudentExperimentLogUncheckedCreateWithoutExperimentInput = {
    id?: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogCreateOrConnectWithoutExperimentInput = {
    where: StudentExperimentLogWhereUniqueInput
    create: XOR<StudentExperimentLogCreateWithoutExperimentInput, StudentExperimentLogUncheckedCreateWithoutExperimentInput>
  }

  export type StudentExperimentLogCreateManyExperimentInputEnvelope = {
    data: StudentExperimentLogCreateManyExperimentInput | StudentExperimentLogCreateManyExperimentInput[]
    skipDuplicates?: boolean
  }

  export type AIInteractionLogCreateWithoutExperimentInput = {
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutAiLogsInput
  }

  export type AIInteractionLogUncheckedCreateWithoutExperimentInput = {
    id?: number
    studentId: number
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIInteractionLogCreateOrConnectWithoutExperimentInput = {
    where: AIInteractionLogWhereUniqueInput
    create: XOR<AIInteractionLogCreateWithoutExperimentInput, AIInteractionLogUncheckedCreateWithoutExperimentInput>
  }

  export type AIInteractionLogCreateManyExperimentInputEnvelope = {
    data: AIInteractionLogCreateManyExperimentInput | AIInteractionLogCreateManyExperimentInput[]
    skipDuplicates?: boolean
  }

  export type StudentExperimentLogUpsertWithWhereUniqueWithoutExperimentInput = {
    where: StudentExperimentLogWhereUniqueInput
    update: XOR<StudentExperimentLogUpdateWithoutExperimentInput, StudentExperimentLogUncheckedUpdateWithoutExperimentInput>
    create: XOR<StudentExperimentLogCreateWithoutExperimentInput, StudentExperimentLogUncheckedCreateWithoutExperimentInput>
  }

  export type StudentExperimentLogUpdateWithWhereUniqueWithoutExperimentInput = {
    where: StudentExperimentLogWhereUniqueInput
    data: XOR<StudentExperimentLogUpdateWithoutExperimentInput, StudentExperimentLogUncheckedUpdateWithoutExperimentInput>
  }

  export type StudentExperimentLogUpdateManyWithWhereWithoutExperimentInput = {
    where: StudentExperimentLogScalarWhereInput
    data: XOR<StudentExperimentLogUpdateManyMutationInput, StudentExperimentLogUncheckedUpdateManyWithoutExperimentInput>
  }

  export type AIInteractionLogUpsertWithWhereUniqueWithoutExperimentInput = {
    where: AIInteractionLogWhereUniqueInput
    update: XOR<AIInteractionLogUpdateWithoutExperimentInput, AIInteractionLogUncheckedUpdateWithoutExperimentInput>
    create: XOR<AIInteractionLogCreateWithoutExperimentInput, AIInteractionLogUncheckedCreateWithoutExperimentInput>
  }

  export type AIInteractionLogUpdateWithWhereUniqueWithoutExperimentInput = {
    where: AIInteractionLogWhereUniqueInput
    data: XOR<AIInteractionLogUpdateWithoutExperimentInput, AIInteractionLogUncheckedUpdateWithoutExperimentInput>
  }

  export type AIInteractionLogUpdateManyWithWhereWithoutExperimentInput = {
    where: AIInteractionLogScalarWhereInput
    data: XOR<AIInteractionLogUpdateManyMutationInput, AIInteractionLogUncheckedUpdateManyWithoutExperimentInput>
  }

  export type UserCreateWithoutExperimentsInput = {
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    aiLogs?: AIInteractionLogCreateNestedManyWithoutStudentInput
    classes?: ClassMemberCreateNestedManyWithoutUserInput
    teachingClasses?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutExperimentsInput = {
    id?: number
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    aiLogs?: AIInteractionLogUncheckedCreateNestedManyWithoutStudentInput
    classes?: ClassMemberUncheckedCreateNestedManyWithoutUserInput
    teachingClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutExperimentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperimentsInput, UserUncheckedCreateWithoutExperimentsInput>
  }

  export type ExperimentCreateWithoutLogsInput = {
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
    aiLogs?: AIInteractionLogCreateNestedManyWithoutExperimentInput
  }

  export type ExperimentUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
    aiLogs?: AIInteractionLogUncheckedCreateNestedManyWithoutExperimentInput
  }

  export type ExperimentCreateOrConnectWithoutLogsInput = {
    where: ExperimentWhereUniqueInput
    create: XOR<ExperimentCreateWithoutLogsInput, ExperimentUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutExperimentsInput = {
    update: XOR<UserUpdateWithoutExperimentsInput, UserUncheckedUpdateWithoutExperimentsInput>
    create: XOR<UserCreateWithoutExperimentsInput, UserUncheckedCreateWithoutExperimentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperimentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperimentsInput, UserUncheckedUpdateWithoutExperimentsInput>
  }

  export type UserUpdateWithoutExperimentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiLogs?: AIInteractionLogUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUpdateManyWithoutUserNestedInput
    teachingClasses?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutExperimentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiLogs?: AIInteractionLogUncheckedUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUncheckedUpdateManyWithoutUserNestedInput
    teachingClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ExperimentUpsertWithoutLogsInput = {
    update: XOR<ExperimentUpdateWithoutLogsInput, ExperimentUncheckedUpdateWithoutLogsInput>
    create: XOR<ExperimentCreateWithoutLogsInput, ExperimentUncheckedCreateWithoutLogsInput>
    where?: ExperimentWhereInput
  }

  export type ExperimentUpdateToOneWithWhereWithoutLogsInput = {
    where?: ExperimentWhereInput
    data: XOR<ExperimentUpdateWithoutLogsInput, ExperimentUncheckedUpdateWithoutLogsInput>
  }

  export type ExperimentUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiLogs?: AIInteractionLogUpdateManyWithoutExperimentNestedInput
  }

  export type ExperimentUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiLogs?: AIInteractionLogUncheckedUpdateManyWithoutExperimentNestedInput
  }

  export type UserCreateWithoutAiLogsInput = {
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogCreateNestedManyWithoutStudentInput
    classes?: ClassMemberCreateNestedManyWithoutUserInput
    teachingClasses?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutAiLogsInput = {
    id?: number
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogUncheckedCreateNestedManyWithoutStudentInput
    classes?: ClassMemberUncheckedCreateNestedManyWithoutUserInput
    teachingClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutAiLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
  }

  export type ExperimentCreateWithoutAiLogsInput = {
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
    logs?: StudentExperimentLogCreateNestedManyWithoutExperimentInput
  }

  export type ExperimentUncheckedCreateWithoutAiLogsInput = {
    id?: number
    name: string
    subject?: $Enums.Subject
    description?: string | null
    sceneAssetPath: string
    version?: string | null
    createdAt?: Date | string
    logs?: StudentExperimentLogUncheckedCreateNestedManyWithoutExperimentInput
  }

  export type ExperimentCreateOrConnectWithoutAiLogsInput = {
    where: ExperimentWhereUniqueInput
    create: XOR<ExperimentCreateWithoutAiLogsInput, ExperimentUncheckedCreateWithoutAiLogsInput>
  }

  export type UserUpsertWithoutAiLogsInput = {
    update: XOR<UserUpdateWithoutAiLogsInput, UserUncheckedUpdateWithoutAiLogsInput>
    create: XOR<UserCreateWithoutAiLogsInput, UserUncheckedCreateWithoutAiLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiLogsInput, UserUncheckedUpdateWithoutAiLogsInput>
  }

  export type UserUpdateWithoutAiLogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUpdateManyWithoutUserNestedInput
    teachingClasses?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutAiLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUncheckedUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUncheckedUpdateManyWithoutUserNestedInput
    teachingClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ExperimentUpsertWithoutAiLogsInput = {
    update: XOR<ExperimentUpdateWithoutAiLogsInput, ExperimentUncheckedUpdateWithoutAiLogsInput>
    create: XOR<ExperimentCreateWithoutAiLogsInput, ExperimentUncheckedCreateWithoutAiLogsInput>
    where?: ExperimentWhereInput
  }

  export type ExperimentUpdateToOneWithWhereWithoutAiLogsInput = {
    where?: ExperimentWhereInput
    data: XOR<ExperimentUpdateWithoutAiLogsInput, ExperimentUncheckedUpdateWithoutAiLogsInput>
  }

  export type ExperimentUpdateWithoutAiLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: StudentExperimentLogUpdateManyWithoutExperimentNestedInput
  }

  export type ExperimentUncheckedUpdateWithoutAiLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subject?: EnumSubjectFieldUpdateOperationsInput | $Enums.Subject
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sceneAssetPath?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: StudentExperimentLogUncheckedUpdateManyWithoutExperimentNestedInput
  }

  export type UserCreateWithoutTeachingClassesInput = {
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogCreateNestedManyWithoutStudentInput
    aiLogs?: AIInteractionLogCreateNestedManyWithoutStudentInput
    classes?: ClassMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeachingClassesInput = {
    id?: number
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogUncheckedCreateNestedManyWithoutStudentInput
    aiLogs?: AIInteractionLogUncheckedCreateNestedManyWithoutStudentInput
    classes?: ClassMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeachingClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeachingClassesInput, UserUncheckedCreateWithoutTeachingClassesInput>
  }

  export type ClassMemberCreateWithoutClassInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutClassesInput
  }

  export type ClassMemberUncheckedCreateWithoutClassInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type ClassMemberCreateOrConnectWithoutClassInput = {
    where: ClassMemberWhereUniqueInput
    create: XOR<ClassMemberCreateWithoutClassInput, ClassMemberUncheckedCreateWithoutClassInput>
  }

  export type ClassMemberCreateManyClassInputEnvelope = {
    data: ClassMemberCreateManyClassInput | ClassMemberCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeachingClassesInput = {
    update: XOR<UserUpdateWithoutTeachingClassesInput, UserUncheckedUpdateWithoutTeachingClassesInput>
    create: XOR<UserCreateWithoutTeachingClassesInput, UserUncheckedCreateWithoutTeachingClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeachingClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeachingClassesInput, UserUncheckedUpdateWithoutTeachingClassesInput>
  }

  export type UserUpdateWithoutTeachingClassesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUpdateManyWithoutStudentNestedInput
    aiLogs?: AIInteractionLogUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeachingClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUncheckedUpdateManyWithoutStudentNestedInput
    aiLogs?: AIInteractionLogUncheckedUpdateManyWithoutStudentNestedInput
    classes?: ClassMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ClassMemberUpsertWithWhereUniqueWithoutClassInput = {
    where: ClassMemberWhereUniqueInput
    update: XOR<ClassMemberUpdateWithoutClassInput, ClassMemberUncheckedUpdateWithoutClassInput>
    create: XOR<ClassMemberCreateWithoutClassInput, ClassMemberUncheckedCreateWithoutClassInput>
  }

  export type ClassMemberUpdateWithWhereUniqueWithoutClassInput = {
    where: ClassMemberWhereUniqueInput
    data: XOR<ClassMemberUpdateWithoutClassInput, ClassMemberUncheckedUpdateWithoutClassInput>
  }

  export type ClassMemberUpdateManyWithWhereWithoutClassInput = {
    where: ClassMemberScalarWhereInput
    data: XOR<ClassMemberUpdateManyMutationInput, ClassMemberUncheckedUpdateManyWithoutClassInput>
  }

  export type UserCreateWithoutClassesInput = {
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogCreateNestedManyWithoutStudentInput
    aiLogs?: AIInteractionLogCreateNestedManyWithoutStudentInput
    teachingClasses?: ClassCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutClassesInput = {
    id?: number
    email: string
    fullName: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    experiments?: StudentExperimentLogUncheckedCreateNestedManyWithoutStudentInput
    aiLogs?: AIInteractionLogUncheckedCreateNestedManyWithoutStudentInput
    teachingClasses?: ClassUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutClassesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
  }

  export type ClassCreateWithoutMembersInput = {
    name: string
    joinCode: string
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeachingClassesInput
  }

  export type ClassUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    teacherId: number
    joinCode: string
    createdAt?: Date | string
  }

  export type ClassCreateOrConnectWithoutMembersInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutMembersInput, ClassUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutClassesInput = {
    update: XOR<UserUpdateWithoutClassesInput, UserUncheckedUpdateWithoutClassesInput>
    create: XOR<UserCreateWithoutClassesInput, UserUncheckedCreateWithoutClassesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClassesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClassesInput, UserUncheckedUpdateWithoutClassesInput>
  }

  export type UserUpdateWithoutClassesInput = {
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUpdateManyWithoutStudentNestedInput
    aiLogs?: AIInteractionLogUpdateManyWithoutStudentNestedInput
    teachingClasses?: ClassUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiments?: StudentExperimentLogUncheckedUpdateManyWithoutStudentNestedInput
    aiLogs?: AIInteractionLogUncheckedUpdateManyWithoutStudentNestedInput
    teachingClasses?: ClassUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ClassUpsertWithoutMembersInput = {
    update: XOR<ClassUpdateWithoutMembersInput, ClassUncheckedUpdateWithoutMembersInput>
    create: XOR<ClassCreateWithoutMembersInput, ClassUncheckedCreateWithoutMembersInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutMembersInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutMembersInput, ClassUncheckedUpdateWithoutMembersInput>
  }

  export type ClassUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeachingClassesNestedInput
  }

  export type ClassUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    teacherId?: IntFieldUpdateOperationsInput | number
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExperimentLogCreateManyStudentInput = {
    id?: number
    experimentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIInteractionLogCreateManyStudentInput = {
    id?: number
    experimentId: number
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ClassMemberCreateManyUserInput = {
    id?: number
    classId: number
    createdAt?: Date | string
  }

  export type ClassCreateManyTeacherInput = {
    id?: number
    name: string
    joinCode: string
    createdAt?: Date | string
  }

  export type StudentExperimentLogUpdateWithoutStudentInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
    experiment?: ExperimentUpdateOneRequiredWithoutLogsNestedInput
  }

  export type StudentExperimentLogUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIInteractionLogUpdateWithoutStudentInput = {
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiment?: ExperimentUpdateOneRequiredWithoutAiLogsNestedInput
  }

  export type AIInteractionLogUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionLogUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    experimentId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ClassMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    classId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ClassMemberUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ClassMemberUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    joinCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentExperimentLogCreateManyExperimentInput = {
    id?: number
    studentId: number
    startTime?: Date | string
    endTime?: Date | string | null
    completionStatus?: string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIInteractionLogCreateManyExperimentInput = {
    id?: number
    studentId: number
    sessionId?: string | null
    userQuery: string
    aiResponse: string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type StudentExperimentLogUpdateWithoutExperimentInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
    student?: UserUpdateOneRequiredWithoutExperimentsNestedInput
  }

  export type StudentExperimentLogUncheckedUpdateWithoutExperimentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type StudentExperimentLogUncheckedUpdateManyWithoutExperimentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completionStatus?: StringFieldUpdateOperationsInput | string
    recordedData?: NullableJsonNullValueInput | InputJsonValue
    actionsLog?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AIInteractionLogUpdateWithoutExperimentInput = {
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAiLogsNestedInput
  }

  export type AIInteractionLogUncheckedUpdateWithoutExperimentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIInteractionLogUncheckedUpdateManyWithoutExperimentInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    userQuery?: StringFieldUpdateOperationsInput | string
    aiResponse?: StringFieldUpdateOperationsInput | string
    contextSnapshot?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberCreateManyClassInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type ClassMemberUpdateWithoutClassInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutClassesNestedInput
  }

  export type ClassMemberUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClassMemberUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}