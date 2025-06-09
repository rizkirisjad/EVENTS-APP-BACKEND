
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model TicketType
 * 
 */
export type TicketType = $Result.DefaultSelection<Prisma.$TicketTypePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model ReferralUsage
 * 
 */
export type ReferralUsage = $Result.DefaultSelection<Prisma.$ReferralUsagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PARTICIPANT: 'PARTICIPANT',
  ORGANIZER: 'ORGANIZER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const PromotionType: {
  REFERRAL: 'REFERRAL',
  TIME_BASED: 'TIME_BASED'
};

export type PromotionType = (typeof PromotionType)[keyof typeof PromotionType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type PromotionType = $Enums.PromotionType

export const PromotionType: typeof $Enums.PromotionType

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketType`: Exposes CRUD operations for the **TicketType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTypes
    * const ticketTypes = await prisma.ticketType.findMany()
    * ```
    */
  get ticketType(): Prisma.TicketTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralUsage`: Exposes CRUD operations for the **ReferralUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralUsages
    * const referralUsages = await prisma.referralUsage.findMany()
    * ```
    */
  get referralUsage(): Prisma.ReferralUsageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Event: 'Event',
    TicketType: 'TicketType',
    Transaction: 'Transaction',
    Promotion: 'Promotion',
    Point: 'Point',
    ReferralUsage: 'ReferralUsage'
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
      modelProps: "user" | "event" | "ticketType" | "transaction" | "promotion" | "point" | "referralUsage"
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      TicketType: {
        payload: Prisma.$TicketTypePayload<ExtArgs>
        fields: Prisma.TicketTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findFirst: {
            args: Prisma.TicketTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          findMany: {
            args: Prisma.TicketTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          create: {
            args: Prisma.TicketTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          createMany: {
            args: Prisma.TicketTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          delete: {
            args: Prisma.TicketTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          update: {
            args: Prisma.TicketTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          deleteMany: {
            args: Prisma.TicketTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>[]
          }
          upsert: {
            args: Prisma.TicketTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTypePayload>
          }
          aggregate: {
            args: Prisma.TicketTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketType>
          }
          groupBy: {
            args: Prisma.TicketTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTypeCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTypeCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      ReferralUsage: {
        payload: Prisma.$ReferralUsagePayload<ExtArgs>
        fields: Prisma.ReferralUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          findFirst: {
            args: Prisma.ReferralUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          findMany: {
            args: Prisma.ReferralUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>[]
          }
          create: {
            args: Prisma.ReferralUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          createMany: {
            args: Prisma.ReferralUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>[]
          }
          delete: {
            args: Prisma.ReferralUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          update: {
            args: Prisma.ReferralUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          deleteMany: {
            args: Prisma.ReferralUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>[]
          }
          upsert: {
            args: Prisma.ReferralUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          aggregate: {
            args: Prisma.ReferralUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralUsage>
          }
          groupBy: {
            args: Prisma.ReferralUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralUsageCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    event?: EventOmit
    ticketType?: TicketTypeOmit
    transaction?: TransactionOmit
    promotion?: PromotionOmit
    point?: PointOmit
    referralUsage?: ReferralUsageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    referrals: number
    points: number
    createdEvents: number
    transactions: number
    referralUsagesGiven: number
    referralUsagesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
    points?: boolean | UserCountOutputTypeCountPointsArgs
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    referralUsagesGiven?: boolean | UserCountOutputTypeCountReferralUsagesGivenArgs
    referralUsagesReceived?: boolean | UserCountOutputTypeCountReferralUsagesReceivedArgs
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
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralUsagesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralUsagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    ticketTypes: number
    transactions: number
    promotions: number
    User: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTypes?: boolean | EventCountOutputTypeCountTicketTypesArgs
    transactions?: boolean | EventCountOutputTypeCountTransactionsArgs
    promotions?: boolean | EventCountOutputTypeCountPromotionsArgs
    User?: boolean | EventCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TicketTypeCountOutputType
   */

  export type TicketTypeCountOutputType = {
    Transaction: number
  }

  export type TicketTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | TicketTypeCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTypeCountOutputType
     */
    select?: TicketTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTypeCountOutputType without action
   */
  export type TicketTypeCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    User: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | TransactionCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    referralCode: string | null
    referredBy: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.UserRole | null
    referralCode: string | null
    referredBy: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    referralCode: number
    referredBy: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    referralCode?: true
    referredBy?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    referralCode?: true
    referredBy?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    referralCode?: true
    referredBy?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.UserRole
    referralCode: string
    referredBy: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
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
    password?: boolean
    name?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    referralUsagesGiven?: boolean | User$referralUsagesGivenArgs<ExtArgs>
    referralUsagesReceived?: boolean | User$referralUsagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    referralCode?: boolean
    referredBy?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "referralCode" | "referredBy" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
    referrals?: boolean | User$referralsArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    referralUsagesGiven?: boolean | User$referralUsagesGivenArgs<ExtArgs>
    referralUsagesReceived?: boolean | User$referralUsagesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      referredByUser: Prisma.$UserPayload<ExtArgs> | null
      referrals: Prisma.$UserPayload<ExtArgs>[]
      points: Prisma.$PointPayload<ExtArgs>[]
      createdEvents: Prisma.$EventPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      referralUsagesGiven: Prisma.$ReferralUsagePayload<ExtArgs>[]
      referralUsagesReceived: Prisma.$ReferralUsagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.UserRole
      referralCode: string
      referredBy: string | null
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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    referredByUser<T extends User$referredByUserArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdEvents<T extends User$createdEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralUsagesGiven<T extends User$referralUsagesGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$referralUsagesGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralUsagesReceived<T extends User$referralUsagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$referralUsagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredBy: FieldRef<"User", 'String'>
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
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.referredByUser
   */
  export type User$referredByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User.createdEvents
   */
  export type User$createdEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.referralUsagesGiven
   */
  export type User$referralUsagesGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    cursor?: ReferralUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * User.referralUsagesReceived
   */
  export type User$referralUsagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    cursor?: ReferralUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    price: number | null
    availableSeats: number | null
  }

  export type EventSumAggregateOutputType = {
    price: number | null
    availableSeats: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    time: string | null
    location: string | null
    category: string | null
    imageUrl: string | null
    price: number | null
    isFree: boolean | null
    availableSeats: number | null
    organizerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    time: string | null
    location: string | null
    category: string | null
    imageUrl: string | null
    price: number | null
    isFree: boolean | null
    availableSeats: number | null
    organizerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    time: number
    location: number
    category: number
    imageUrl: number
    price: number
    isFree: number
    availableSeats: number
    organizerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    price?: true
    availableSeats?: true
  }

  export type EventSumAggregateInputType = {
    price?: true
    availableSeats?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    time?: true
    location?: true
    category?: true
    imageUrl?: true
    price?: true
    isFree?: true
    availableSeats?: true
    organizerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    time?: true
    location?: true
    category?: true
    imageUrl?: true
    price?: true
    isFree?: true
    availableSeats?: true
    organizerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    time?: true
    location?: true
    category?: true
    imageUrl?: true
    price?: true
    isFree?: true
    availableSeats?: true
    organizerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string
    date: Date
    time: string
    location: string
    category: string
    imageUrl: string | null
    price: number
    isFree: boolean
    availableSeats: number
    organizerId: string
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    category?: boolean
    imageUrl?: boolean
    price?: boolean
    isFree?: boolean
    availableSeats?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    promotions?: boolean | Event$promotionsArgs<ExtArgs>
    User?: boolean | Event$UserArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    category?: boolean
    imageUrl?: boolean
    price?: boolean
    isFree?: boolean
    availableSeats?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    category?: boolean
    imageUrl?: boolean
    price?: boolean
    isFree?: boolean
    availableSeats?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    category?: boolean
    imageUrl?: boolean
    price?: boolean
    isFree?: boolean
    availableSeats?: boolean
    organizerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "time" | "location" | "category" | "imageUrl" | "price" | "isFree" | "availableSeats" | "organizerId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTypes?: boolean | Event$ticketTypesArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    promotions?: boolean | Event$promotionsArgs<ExtArgs>
    User?: boolean | Event$UserArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      ticketTypes: Prisma.$TicketTypePayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      date: Date
      time: string
      location: string
      category: string
      imageUrl: string | null
      price: number
      isFree: boolean
      availableSeats: number
      organizerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketTypes<T extends Event$ticketTypesArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Event$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promotions<T extends Event$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Event$UserArgs<ExtArgs> = {}>(args?: Subset<T, Event$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly time: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly category: FieldRef<"Event", 'String'>
    readonly imageUrl: FieldRef<"Event", 'String'>
    readonly price: FieldRef<"Event", 'Int'>
    readonly isFree: FieldRef<"Event", 'Boolean'>
    readonly availableSeats: FieldRef<"Event", 'Int'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.ticketTypes
   */
  export type Event$ticketTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    cursor?: TicketTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * Event.transactions
   */
  export type Event$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Event.promotions
   */
  export type Event$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Event.User
   */
  export type Event$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model TicketType
   */

  export type AggregateTicketType = {
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  export type TicketTypeAvgAggregateOutputType = {
    price: number | null
  }

  export type TicketTypeSumAggregateOutputType = {
    price: number | null
  }

  export type TicketTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    eventId: string | null
  }

  export type TicketTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    eventId: string | null
  }

  export type TicketTypeCountAggregateOutputType = {
    id: number
    name: number
    price: number
    eventId: number
    _all: number
  }


  export type TicketTypeAvgAggregateInputType = {
    price?: true
  }

  export type TicketTypeSumAggregateInputType = {
    price?: true
  }

  export type TicketTypeMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    eventId?: true
  }

  export type TicketTypeMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    eventId?: true
  }

  export type TicketTypeCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    eventId?: true
    _all?: true
  }

  export type TicketTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketType to aggregate.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTypes
    **/
    _count?: true | TicketTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTypeMaxAggregateInputType
  }

  export type GetTicketTypeAggregateType<T extends TicketTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketType[P]>
      : GetScalarType<T[P], AggregateTicketType[P]>
  }




  export type TicketTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTypeWhereInput
    orderBy?: TicketTypeOrderByWithAggregationInput | TicketTypeOrderByWithAggregationInput[]
    by: TicketTypeScalarFieldEnum[] | TicketTypeScalarFieldEnum
    having?: TicketTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTypeCountAggregateInputType | true
    _avg?: TicketTypeAvgAggregateInputType
    _sum?: TicketTypeSumAggregateInputType
    _min?: TicketTypeMinAggregateInputType
    _max?: TicketTypeMaxAggregateInputType
  }

  export type TicketTypeGroupByOutputType = {
    id: string
    name: string
    price: number
    eventId: string
    _count: TicketTypeCountAggregateOutputType | null
    _avg: TicketTypeAvgAggregateOutputType | null
    _sum: TicketTypeSumAggregateOutputType | null
    _min: TicketTypeMinAggregateOutputType | null
    _max: TicketTypeMaxAggregateOutputType | null
  }

  type GetTicketTypeGroupByPayload<T extends TicketTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTypeGroupByOutputType[P]>
        }
      >
    >


  export type TicketTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | TicketType$TransactionArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    eventId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketType"]>

  export type TicketTypeSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    eventId?: boolean
  }

  export type TicketTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "eventId", ExtArgs["result"]["ticketType"]>
  export type TicketTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | TicketType$TransactionArgs<ExtArgs>
    _count?: boolean | TicketTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TicketTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketType"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      eventId: string
    }, ExtArgs["result"]["ticketType"]>
    composites: {}
  }

  type TicketTypeGetPayload<S extends boolean | null | undefined | TicketTypeDefaultArgs> = $Result.GetResult<Prisma.$TicketTypePayload, S>

  type TicketTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTypeCountAggregateInputType | true
    }

  export interface TicketTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketType'], meta: { name: 'TicketType' } }
    /**
     * Find zero or one TicketType that matches the filter.
     * @param {TicketTypeFindUniqueArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTypeFindUniqueArgs>(args: SelectSubset<T, TicketTypeFindUniqueArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTypeFindUniqueOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTypeFindFirstArgs>(args?: SelectSubset<T, TicketTypeFindFirstArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindFirstOrThrowArgs} args - Arguments to find a TicketType
     * @example
     * // Get one TicketType
     * const ticketType = await prisma.ticketType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany()
     * 
     * // Get first 10 TicketTypes
     * const ticketTypes = await prisma.ticketType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTypeFindManyArgs>(args?: SelectSubset<T, TicketTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketType.
     * @param {TicketTypeCreateArgs} args - Arguments to create a TicketType.
     * @example
     * // Create one TicketType
     * const TicketType = await prisma.ticketType.create({
     *   data: {
     *     // ... data to create a TicketType
     *   }
     * })
     * 
     */
    create<T extends TicketTypeCreateArgs>(args: SelectSubset<T, TicketTypeCreateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTypes.
     * @param {TicketTypeCreateManyArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTypeCreateManyArgs>(args?: SelectSubset<T, TicketTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketTypes and returns the data saved in the database.
     * @param {TicketTypeCreateManyAndReturnArgs} args - Arguments to create many TicketTypes.
     * @example
     * // Create many TicketTypes
     * const ticketType = await prisma.ticketType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketType.
     * @param {TicketTypeDeleteArgs} args - Arguments to delete one TicketType.
     * @example
     * // Delete one TicketType
     * const TicketType = await prisma.ticketType.delete({
     *   where: {
     *     // ... filter to delete one TicketType
     *   }
     * })
     * 
     */
    delete<T extends TicketTypeDeleteArgs>(args: SelectSubset<T, TicketTypeDeleteArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketType.
     * @param {TicketTypeUpdateArgs} args - Arguments to update one TicketType.
     * @example
     * // Update one TicketType
     * const ticketType = await prisma.ticketType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTypeUpdateArgs>(args: SelectSubset<T, TicketTypeUpdateArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTypes.
     * @param {TicketTypeDeleteManyArgs} args - Arguments to filter TicketTypes to delete.
     * @example
     * // Delete a few TicketTypes
     * const { count } = await prisma.ticketType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTypeDeleteManyArgs>(args?: SelectSubset<T, TicketTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTypeUpdateManyArgs>(args: SelectSubset<T, TicketTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTypes and returns the data updated in the database.
     * @param {TicketTypeUpdateManyAndReturnArgs} args - Arguments to update many TicketTypes.
     * @example
     * // Update many TicketTypes
     * const ticketType = await prisma.ticketType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketTypes and only return the `id`
     * const ticketTypeWithIdOnly = await prisma.ticketType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketType.
     * @param {TicketTypeUpsertArgs} args - Arguments to update or create a TicketType.
     * @example
     * // Update or create a TicketType
     * const ticketType = await prisma.ticketType.upsert({
     *   create: {
     *     // ... data to create a TicketType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketType we want to update
     *   }
     * })
     */
    upsert<T extends TicketTypeUpsertArgs>(args: SelectSubset<T, TicketTypeUpsertArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeCountArgs} args - Arguments to filter TicketTypes to count.
     * @example
     * // Count the number of TicketTypes
     * const count = await prisma.ticketType.count({
     *   where: {
     *     // ... the filter for the TicketTypes we want to count
     *   }
     * })
    **/
    count<T extends TicketTypeCountArgs>(
      args?: Subset<T, TicketTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketTypeAggregateArgs>(args: Subset<T, TicketTypeAggregateArgs>): Prisma.PrismaPromise<GetTicketTypeAggregateType<T>>

    /**
     * Group by TicketType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTypeGroupByArgs} args - Group by arguments.
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
      T extends TicketTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTypeGroupByArgs['orderBy'] }
        : { orderBy?: TicketTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketType model
   */
  readonly fields: TicketTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends TicketType$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, TicketType$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TicketType model
   */
  interface TicketTypeFieldRefs {
    readonly id: FieldRef<"TicketType", 'String'>
    readonly name: FieldRef<"TicketType", 'String'>
    readonly price: FieldRef<"TicketType", 'Int'>
    readonly eventId: FieldRef<"TicketType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketType findUnique
   */
  export type TicketTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findUniqueOrThrow
   */
  export type TicketTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType findFirst
   */
  export type TicketTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findFirstOrThrow
   */
  export type TicketTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketType to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTypes.
     */
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType findMany
   */
  export type TicketTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter, which TicketTypes to fetch.
     */
    where?: TicketTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTypes to fetch.
     */
    orderBy?: TicketTypeOrderByWithRelationInput | TicketTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTypes.
     */
    cursor?: TicketTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTypes.
     */
    skip?: number
    distinct?: TicketTypeScalarFieldEnum | TicketTypeScalarFieldEnum[]
  }

  /**
   * TicketType create
   */
  export type TicketTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketType.
     */
    data: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
  }

  /**
   * TicketType createMany
   */
  export type TicketTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketType createManyAndReturn
   */
  export type TicketTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * The data used to create many TicketTypes.
     */
    data: TicketTypeCreateManyInput | TicketTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketType update
   */
  export type TicketTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketType.
     */
    data: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
    /**
     * Choose, which TicketType to update.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType updateMany
   */
  export type TicketTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
  }

  /**
   * TicketType updateManyAndReturn
   */
  export type TicketTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * The data used to update TicketTypes.
     */
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyInput>
    /**
     * Filter which TicketTypes to update
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketType upsert
   */
  export type TicketTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketType to update in case it exists.
     */
    where: TicketTypeWhereUniqueInput
    /**
     * In case the TicketType found by the `where` argument doesn't exist, create a new TicketType with this data.
     */
    create: XOR<TicketTypeCreateInput, TicketTypeUncheckedCreateInput>
    /**
     * In case the TicketType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTypeUpdateInput, TicketTypeUncheckedUpdateInput>
  }

  /**
   * TicketType delete
   */
  export type TicketTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    /**
     * Filter which TicketType to delete.
     */
    where: TicketTypeWhereUniqueInput
  }

  /**
   * TicketType deleteMany
   */
  export type TicketTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTypes to delete
     */
    where?: TicketTypeWhereInput
    /**
     * Limit how many TicketTypes to delete.
     */
    limit?: number
  }

  /**
   * TicketType.Transaction
   */
  export type TicketType$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * TicketType without action
   */
  export type TicketTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    quantity: number | null
    totalPaid: number | null
  }

  export type TransactionSumAggregateOutputType = {
    quantity: number | null
    totalPaid: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    ticketTypeId: string | null
    userEmail: string | null
    quantity: number | null
    totalPaid: number | null
    promoCode: string | null
    referralCode: string | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    ticketTypeId: string | null
    userEmail: string | null
    quantity: number | null
    totalPaid: number | null
    promoCode: string | null
    referralCode: string | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    eventId: number
    ticketTypeId: number
    userEmail: number
    quantity: number
    totalPaid: number
    promoCode: number
    referralCode: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    quantity?: true
    totalPaid?: true
  }

  export type TransactionSumAggregateInputType = {
    quantity?: true
    totalPaid?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    eventId?: true
    ticketTypeId?: true
    userEmail?: true
    quantity?: true
    totalPaid?: true
    promoCode?: true
    referralCode?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    eventId?: true
    ticketTypeId?: true
    userEmail?: true
    quantity?: true
    totalPaid?: true
    promoCode?: true
    referralCode?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    eventId?: true
    ticketTypeId?: true
    userEmail?: true
    quantity?: true
    totalPaid?: true
    promoCode?: true
    referralCode?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    eventId: string
    ticketTypeId: string | null
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode: string | null
    referralCode: string | null
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    userEmail?: boolean
    quantity?: boolean
    totalPaid?: boolean
    promoCode?: boolean
    referralCode?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | Transaction$ticketTypeArgs<ExtArgs>
    User?: boolean | Transaction$UserArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    userEmail?: boolean
    quantity?: boolean
    totalPaid?: boolean
    promoCode?: boolean
    referralCode?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | Transaction$ticketTypeArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    userEmail?: boolean
    quantity?: boolean
    totalPaid?: boolean
    promoCode?: boolean
    referralCode?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | Transaction$ticketTypeArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    eventId?: boolean
    ticketTypeId?: boolean
    userEmail?: boolean
    quantity?: boolean
    totalPaid?: boolean
    promoCode?: boolean
    referralCode?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "ticketTypeId" | "userEmail" | "quantity" | "totalPaid" | "promoCode" | "referralCode" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | Transaction$ticketTypeArgs<ExtArgs>
    User?: boolean | Transaction$UserArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | Transaction$ticketTypeArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticketType?: boolean | Transaction$ticketTypeArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      ticketType: Prisma.$TicketTypePayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      ticketTypeId: string | null
      userEmail: string
      quantity: number
      totalPaid: number
      promoCode: string | null
      referralCode: string | null
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketType<T extends Transaction$ticketTypeArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ticketTypeArgs<ExtArgs>>): Prisma__TicketTypeClient<$Result.GetResult<Prisma.$TicketTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends Transaction$UserArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly eventId: FieldRef<"Transaction", 'String'>
    readonly ticketTypeId: FieldRef<"Transaction", 'String'>
    readonly userEmail: FieldRef<"Transaction", 'String'>
    readonly quantity: FieldRef<"Transaction", 'Int'>
    readonly totalPaid: FieldRef<"Transaction", 'Int'>
    readonly promoCode: FieldRef<"Transaction", 'String'>
    readonly referralCode: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.ticketType
   */
  export type Transaction$ticketTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketType
     */
    select?: TicketTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketType
     */
    omit?: TicketTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTypeInclude<ExtArgs> | null
    where?: TicketTypeWhereInput
  }

  /**
   * Transaction.User
   */
  export type Transaction$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    discountIDR: number | null
    discountPct: number | null
    maxUsage: number | null
    currentUsage: number | null
  }

  export type PromotionSumAggregateOutputType = {
    discountIDR: number | null
    discountPct: number | null
    maxUsage: number | null
    currentUsage: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    code: string | null
    type: $Enums.PromotionType | null
    discountIDR: number | null
    discountPct: number | null
    maxUsage: number | null
    currentUsage: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    code: string | null
    type: $Enums.PromotionType | null
    discountIDR: number | null
    discountPct: number | null
    maxUsage: number | null
    currentUsage: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    eventId: number
    code: number
    type: number
    discountIDR: number
    discountPct: number
    maxUsage: number
    currentUsage: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    discountIDR?: true
    discountPct?: true
    maxUsage?: true
    currentUsage?: true
  }

  export type PromotionSumAggregateInputType = {
    discountIDR?: true
    discountPct?: true
    maxUsage?: true
    currentUsage?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    eventId?: true
    code?: true
    type?: true
    discountIDR?: true
    discountPct?: true
    maxUsage?: true
    currentUsage?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    eventId?: true
    code?: true
    type?: true
    discountIDR?: true
    discountPct?: true
    maxUsage?: true
    currentUsage?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    eventId?: true
    code?: true
    type?: true
    discountIDR?: true
    discountPct?: true
    maxUsage?: true
    currentUsage?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    eventId: string
    code: string
    type: $Enums.PromotionType
    discountIDR: number | null
    discountPct: number | null
    maxUsage: number | null
    currentUsage: number
    expiresAt: Date
    createdAt: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    code?: boolean
    type?: boolean
    discountIDR?: boolean
    discountPct?: boolean
    maxUsage?: boolean
    currentUsage?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    code?: boolean
    type?: boolean
    discountIDR?: boolean
    discountPct?: boolean
    maxUsage?: boolean
    currentUsage?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    code?: boolean
    type?: boolean
    discountIDR?: boolean
    discountPct?: boolean
    maxUsage?: boolean
    currentUsage?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    eventId?: boolean
    code?: boolean
    type?: boolean
    discountIDR?: boolean
    discountPct?: boolean
    maxUsage?: boolean
    currentUsage?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "code" | "type" | "discountIDR" | "discountPct" | "maxUsage" | "currentUsage" | "expiresAt" | "createdAt", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      code: string
      type: $Enums.PromotionType
      discountIDR: number | null
      discountPct: number | null
      maxUsage: number | null
      currentUsage: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions and returns the data updated in the database.
     * @param {PromotionUpdateManyAndReturnArgs} args - Arguments to update many Promotions.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
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
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly eventId: FieldRef<"Promotion", 'String'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly type: FieldRef<"Promotion", 'PromotionType'>
    readonly discountIDR: FieldRef<"Promotion", 'Int'>
    readonly discountPct: FieldRef<"Promotion", 'Int'>
    readonly maxUsage: FieldRef<"Promotion", 'Int'>
    readonly currentUsage: FieldRef<"Promotion", 'Int'>
    readonly expiresAt: FieldRef<"Promotion", 'DateTime'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion updateManyAndReturn
   */
  export type PromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to delete.
     */
    limit?: number
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    amount: number | null
  }

  export type PointSumAggregateOutputType = {
    amount: number | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    amount?: true
  }

  export type PointSumAggregateInputType = {
    amount?: true
  }

  export type PointMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    userId: string
    amount: number
    expiresAt: Date
    createdAt: Date
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "expiresAt" | "createdAt", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly userId: FieldRef<"Point", 'String'>
    readonly amount: FieldRef<"Point", 'Int'>
    readonly expiresAt: FieldRef<"Point", 'DateTime'>
    readonly createdAt: FieldRef<"Point", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model ReferralUsage
   */

  export type AggregateReferralUsage = {
    _count: ReferralUsageCountAggregateOutputType | null
    _min: ReferralUsageMinAggregateOutputType | null
    _max: ReferralUsageMaxAggregateOutputType | null
  }

  export type ReferralUsageMinAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredUserId: string | null
    usedAt: Date | null
  }

  export type ReferralUsageMaxAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredUserId: string | null
    usedAt: Date | null
  }

  export type ReferralUsageCountAggregateOutputType = {
    id: number
    referrerId: number
    referredUserId: number
    usedAt: number
    _all: number
  }


  export type ReferralUsageMinAggregateInputType = {
    id?: true
    referrerId?: true
    referredUserId?: true
    usedAt?: true
  }

  export type ReferralUsageMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referredUserId?: true
    usedAt?: true
  }

  export type ReferralUsageCountAggregateInputType = {
    id?: true
    referrerId?: true
    referredUserId?: true
    usedAt?: true
    _all?: true
  }

  export type ReferralUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralUsage to aggregate.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralUsages
    **/
    _count?: true | ReferralUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralUsageMaxAggregateInputType
  }

  export type GetReferralUsageAggregateType<T extends ReferralUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralUsage[P]>
      : GetScalarType<T[P], AggregateReferralUsage[P]>
  }




  export type ReferralUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithAggregationInput | ReferralUsageOrderByWithAggregationInput[]
    by: ReferralUsageScalarFieldEnum[] | ReferralUsageScalarFieldEnum
    having?: ReferralUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralUsageCountAggregateInputType | true
    _min?: ReferralUsageMinAggregateInputType
    _max?: ReferralUsageMaxAggregateInputType
  }

  export type ReferralUsageGroupByOutputType = {
    id: string
    referrerId: string
    referredUserId: string
    usedAt: Date
    _count: ReferralUsageCountAggregateOutputType | null
    _min: ReferralUsageMinAggregateOutputType | null
    _max: ReferralUsageMaxAggregateOutputType | null
  }

  type GetReferralUsageGroupByPayload<T extends ReferralUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralUsageGroupByOutputType[P]>
        }
      >
    >


  export type ReferralUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    usedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralUsage"]>

  export type ReferralUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    usedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralUsage"]>

  export type ReferralUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    usedAt?: boolean
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralUsage"]>

  export type ReferralUsageSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referredUserId?: boolean
    usedAt?: boolean
  }

  export type ReferralUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referrerId" | "referredUserId" | "usedAt", ExtArgs["result"]["referralUsage"]>
  export type ReferralUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    referredUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralUsage"
    objects: {
      referrer: Prisma.$UserPayload<ExtArgs>
      referredUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referrerId: string
      referredUserId: string
      usedAt: Date
    }, ExtArgs["result"]["referralUsage"]>
    composites: {}
  }

  type ReferralUsageGetPayload<S extends boolean | null | undefined | ReferralUsageDefaultArgs> = $Result.GetResult<Prisma.$ReferralUsagePayload, S>

  type ReferralUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralUsageCountAggregateInputType | true
    }

  export interface ReferralUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralUsage'], meta: { name: 'ReferralUsage' } }
    /**
     * Find zero or one ReferralUsage that matches the filter.
     * @param {ReferralUsageFindUniqueArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralUsageFindUniqueArgs>(args: SelectSubset<T, ReferralUsageFindUniqueArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralUsageFindUniqueOrThrowArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageFindFirstArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralUsageFindFirstArgs>(args?: SelectSubset<T, ReferralUsageFindFirstArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageFindFirstOrThrowArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralUsages
     * const referralUsages = await prisma.referralUsage.findMany()
     * 
     * // Get first 10 ReferralUsages
     * const referralUsages = await prisma.referralUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralUsageWithIdOnly = await prisma.referralUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralUsageFindManyArgs>(args?: SelectSubset<T, ReferralUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralUsage.
     * @param {ReferralUsageCreateArgs} args - Arguments to create a ReferralUsage.
     * @example
     * // Create one ReferralUsage
     * const ReferralUsage = await prisma.referralUsage.create({
     *   data: {
     *     // ... data to create a ReferralUsage
     *   }
     * })
     * 
     */
    create<T extends ReferralUsageCreateArgs>(args: SelectSubset<T, ReferralUsageCreateArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralUsages.
     * @param {ReferralUsageCreateManyArgs} args - Arguments to create many ReferralUsages.
     * @example
     * // Create many ReferralUsages
     * const referralUsage = await prisma.referralUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralUsageCreateManyArgs>(args?: SelectSubset<T, ReferralUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralUsages and returns the data saved in the database.
     * @param {ReferralUsageCreateManyAndReturnArgs} args - Arguments to create many ReferralUsages.
     * @example
     * // Create many ReferralUsages
     * const referralUsage = await prisma.referralUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralUsages and only return the `id`
     * const referralUsageWithIdOnly = await prisma.referralUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralUsage.
     * @param {ReferralUsageDeleteArgs} args - Arguments to delete one ReferralUsage.
     * @example
     * // Delete one ReferralUsage
     * const ReferralUsage = await prisma.referralUsage.delete({
     *   where: {
     *     // ... filter to delete one ReferralUsage
     *   }
     * })
     * 
     */
    delete<T extends ReferralUsageDeleteArgs>(args: SelectSubset<T, ReferralUsageDeleteArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralUsage.
     * @param {ReferralUsageUpdateArgs} args - Arguments to update one ReferralUsage.
     * @example
     * // Update one ReferralUsage
     * const referralUsage = await prisma.referralUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUsageUpdateArgs>(args: SelectSubset<T, ReferralUsageUpdateArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralUsages.
     * @param {ReferralUsageDeleteManyArgs} args - Arguments to filter ReferralUsages to delete.
     * @example
     * // Delete a few ReferralUsages
     * const { count } = await prisma.referralUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralUsageDeleteManyArgs>(args?: SelectSubset<T, ReferralUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralUsages
     * const referralUsage = await prisma.referralUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUsageUpdateManyArgs>(args: SelectSubset<T, ReferralUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralUsages and returns the data updated in the database.
     * @param {ReferralUsageUpdateManyAndReturnArgs} args - Arguments to update many ReferralUsages.
     * @example
     * // Update many ReferralUsages
     * const referralUsage = await prisma.referralUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralUsages and only return the `id`
     * const referralUsageWithIdOnly = await prisma.referralUsage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferralUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralUsage.
     * @param {ReferralUsageUpsertArgs} args - Arguments to update or create a ReferralUsage.
     * @example
     * // Update or create a ReferralUsage
     * const referralUsage = await prisma.referralUsage.upsert({
     *   create: {
     *     // ... data to create a ReferralUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralUsage we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUsageUpsertArgs>(args: SelectSubset<T, ReferralUsageUpsertArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageCountArgs} args - Arguments to filter ReferralUsages to count.
     * @example
     * // Count the number of ReferralUsages
     * const count = await prisma.referralUsage.count({
     *   where: {
     *     // ... the filter for the ReferralUsages we want to count
     *   }
     * })
    **/
    count<T extends ReferralUsageCountArgs>(
      args?: Subset<T, ReferralUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralUsageAggregateArgs>(args: Subset<T, ReferralUsageAggregateArgs>): Prisma.PrismaPromise<GetReferralUsageAggregateType<T>>

    /**
     * Group by ReferralUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageGroupByArgs} args - Group by arguments.
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
      T extends ReferralUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralUsageGroupByArgs['orderBy'] }
        : { orderBy?: ReferralUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralUsage model
   */
  readonly fields: ReferralUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referredUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralUsage model
   */
  interface ReferralUsageFieldRefs {
    readonly id: FieldRef<"ReferralUsage", 'String'>
    readonly referrerId: FieldRef<"ReferralUsage", 'String'>
    readonly referredUserId: FieldRef<"ReferralUsage", 'String'>
    readonly usedAt: FieldRef<"ReferralUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralUsage findUnique
   */
  export type ReferralUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage findUniqueOrThrow
   */
  export type ReferralUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage findFirst
   */
  export type ReferralUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralUsages.
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralUsages.
     */
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * ReferralUsage findFirstOrThrow
   */
  export type ReferralUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralUsages.
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralUsages.
     */
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * ReferralUsage findMany
   */
  export type ReferralUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsages to fetch.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralUsages.
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * ReferralUsage create
   */
  export type ReferralUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralUsage.
     */
    data: XOR<ReferralUsageCreateInput, ReferralUsageUncheckedCreateInput>
  }

  /**
   * ReferralUsage createMany
   */
  export type ReferralUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralUsages.
     */
    data: ReferralUsageCreateManyInput | ReferralUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralUsage createManyAndReturn
   */
  export type ReferralUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralUsages.
     */
    data: ReferralUsageCreateManyInput | ReferralUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralUsage update
   */
  export type ReferralUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralUsage.
     */
    data: XOR<ReferralUsageUpdateInput, ReferralUsageUncheckedUpdateInput>
    /**
     * Choose, which ReferralUsage to update.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage updateMany
   */
  export type ReferralUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralUsages.
     */
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyInput>
    /**
     * Filter which ReferralUsages to update
     */
    where?: ReferralUsageWhereInput
    /**
     * Limit how many ReferralUsages to update.
     */
    limit?: number
  }

  /**
   * ReferralUsage updateManyAndReturn
   */
  export type ReferralUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * The data used to update ReferralUsages.
     */
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyInput>
    /**
     * Filter which ReferralUsages to update
     */
    where?: ReferralUsageWhereInput
    /**
     * Limit how many ReferralUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralUsage upsert
   */
  export type ReferralUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralUsage to update in case it exists.
     */
    where: ReferralUsageWhereUniqueInput
    /**
     * In case the ReferralUsage found by the `where` argument doesn't exist, create a new ReferralUsage with this data.
     */
    create: XOR<ReferralUsageCreateInput, ReferralUsageUncheckedCreateInput>
    /**
     * In case the ReferralUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUsageUpdateInput, ReferralUsageUncheckedUpdateInput>
  }

  /**
   * ReferralUsage delete
   */
  export type ReferralUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter which ReferralUsage to delete.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage deleteMany
   */
  export type ReferralUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralUsages to delete
     */
    where?: ReferralUsageWhereInput
    /**
     * Limit how many ReferralUsages to delete.
     */
    limit?: number
  }

  /**
   * ReferralUsage without action
   */
  export type ReferralUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    role: 'role',
    referralCode: 'referralCode',
    referredBy: 'referredBy',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    time: 'time',
    location: 'location',
    category: 'category',
    imageUrl: 'imageUrl',
    price: 'price',
    isFree: 'isFree',
    availableSeats: 'availableSeats',
    organizerId: 'organizerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    eventId: 'eventId'
  };

  export type TicketTypeScalarFieldEnum = (typeof TicketTypeScalarFieldEnum)[keyof typeof TicketTypeScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    ticketTypeId: 'ticketTypeId',
    userEmail: 'userEmail',
    quantity: 'quantity',
    totalPaid: 'totalPaid',
    promoCode: 'promoCode',
    referralCode: 'referralCode',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    code: 'code',
    type: 'type',
    discountIDR: 'discountIDR',
    discountPct: 'discountPct',
    maxUsage: 'maxUsage',
    currentUsage: 'currentUsage',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const ReferralUsageScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referredUserId: 'referredUserId',
    usedAt: 'usedAt'
  };

  export type ReferralUsageScalarFieldEnum = (typeof ReferralUsageScalarFieldEnum)[keyof typeof ReferralUsageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PromotionType'
   */
  export type EnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType'>
    


  /**
   * Reference to a field of type 'PromotionType[]'
   */
  export type ListEnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    referralCode?: StringFilter<"User"> | string
    referredBy?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    referredByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    points?: PointListRelationFilter
    createdEvents?: EventListRelationFilter
    transactions?: TransactionListRelationFilter
    referralUsagesGiven?: ReferralUsageListRelationFilter
    referralUsagesReceived?: ReferralUsageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referredByUser?: UserOrderByWithRelationInput
    referrals?: UserOrderByRelationAggregateInput
    points?: PointOrderByRelationAggregateInput
    createdEvents?: EventOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    referralUsagesGiven?: ReferralUsageOrderByRelationAggregateInput
    referralUsagesReceived?: ReferralUsageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    referredBy?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    referredByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referrals?: UserListRelationFilter
    points?: PointListRelationFilter
    createdEvents?: EventListRelationFilter
    transactions?: TransactionListRelationFilter
    referralUsagesGiven?: ReferralUsageListRelationFilter
    referralUsagesReceived?: ReferralUsageListRelationFilter
  }, "id" | "email" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    referralCode?: StringWithAggregatesFilter<"User"> | string
    referredBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    imageUrl?: StringNullableFilter<"Event"> | string | null
    price?: IntFilter<"Event"> | number
    isFree?: BoolFilter<"Event"> | boolean
    availableSeats?: IntFilter<"Event"> | number
    organizerId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    ticketTypes?: TicketTypeListRelationFilter
    transactions?: TransactionListRelationFilter
    promotions?: PromotionListRelationFilter
    User?: UserListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    isFree?: SortOrder
    availableSeats?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticketTypes?: TicketTypeOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    promotions?: PromotionOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    imageUrl?: StringNullableFilter<"Event"> | string | null
    price?: IntFilter<"Event"> | number
    isFree?: BoolFilter<"Event"> | boolean
    availableSeats?: IntFilter<"Event"> | number
    organizerId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    ticketTypes?: TicketTypeListRelationFilter
    transactions?: TransactionListRelationFilter
    promotions?: PromotionListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    isFree?: SortOrder
    availableSeats?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    time?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    category?: StringWithAggregatesFilter<"Event"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    price?: IntWithAggregatesFilter<"Event"> | number
    isFree?: BoolWithAggregatesFilter<"Event"> | boolean
    availableSeats?: IntWithAggregatesFilter<"Event"> | number
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TicketTypeWhereInput = {
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    id?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    price?: IntFilter<"TicketType"> | number
    eventId?: StringFilter<"TicketType"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
  }

  export type TicketTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    event?: EventOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type TicketTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketTypeWhereInput | TicketTypeWhereInput[]
    OR?: TicketTypeWhereInput[]
    NOT?: TicketTypeWhereInput | TicketTypeWhereInput[]
    name?: StringFilter<"TicketType"> | string
    price?: IntFilter<"TicketType"> | number
    eventId?: StringFilter<"TicketType"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type TicketTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
    _count?: TicketTypeCountOrderByAggregateInput
    _avg?: TicketTypeAvgOrderByAggregateInput
    _max?: TicketTypeMaxOrderByAggregateInput
    _min?: TicketTypeMinOrderByAggregateInput
    _sum?: TicketTypeSumOrderByAggregateInput
  }

  export type TicketTypeScalarWhereWithAggregatesInput = {
    AND?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    OR?: TicketTypeScalarWhereWithAggregatesInput[]
    NOT?: TicketTypeScalarWhereWithAggregatesInput | TicketTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketType"> | string
    name?: StringWithAggregatesFilter<"TicketType"> | string
    price?: IntWithAggregatesFilter<"TicketType"> | number
    eventId?: StringWithAggregatesFilter<"TicketType"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketTypeId?: StringNullableFilter<"Transaction"> | string | null
    userEmail?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    totalPaid?: IntFilter<"Transaction"> | number
    promoCode?: StringNullableFilter<"Transaction"> | string | null
    referralCode?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ticketType?: XOR<TicketTypeNullableScalarRelationFilter, TicketTypeWhereInput> | null
    User?: UserListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrderInput | SortOrder
    userEmail?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    promoCode?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    ticketType?: TicketTypeOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    eventId?: StringFilter<"Transaction"> | string
    ticketTypeId?: StringNullableFilter<"Transaction"> | string | null
    userEmail?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    totalPaid?: IntFilter<"Transaction"> | number
    promoCode?: StringNullableFilter<"Transaction"> | string | null
    referralCode?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ticketType?: XOR<TicketTypeNullableScalarRelationFilter, TicketTypeWhereInput> | null
    User?: UserListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrderInput | SortOrder
    userEmail?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    promoCode?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    eventId?: StringWithAggregatesFilter<"Transaction"> | string
    ticketTypeId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    userEmail?: StringWithAggregatesFilter<"Transaction"> | string
    quantity?: IntWithAggregatesFilter<"Transaction"> | number
    totalPaid?: IntWithAggregatesFilter<"Transaction"> | number
    promoCode?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    referralCode?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    eventId?: StringFilter<"Promotion"> | string
    code?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    discountIDR?: IntNullableFilter<"Promotion"> | number | null
    discountPct?: IntNullableFilter<"Promotion"> | number | null
    maxUsage?: IntNullableFilter<"Promotion"> | number | null
    currentUsage?: IntFilter<"Promotion"> | number
    expiresAt?: DateTimeFilter<"Promotion"> | Date | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    discountIDR?: SortOrderInput | SortOrder
    discountPct?: SortOrderInput | SortOrder
    maxUsage?: SortOrderInput | SortOrder
    currentUsage?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    eventId?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    discountIDR?: IntNullableFilter<"Promotion"> | number | null
    discountPct?: IntNullableFilter<"Promotion"> | number | null
    maxUsage?: IntNullableFilter<"Promotion"> | number | null
    currentUsage?: IntFilter<"Promotion"> | number
    expiresAt?: DateTimeFilter<"Promotion"> | Date | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    discountIDR?: SortOrderInput | SortOrder
    discountPct?: SortOrderInput | SortOrder
    maxUsage?: SortOrderInput | SortOrder
    currentUsage?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    eventId?: StringWithAggregatesFilter<"Promotion"> | string
    code?: StringWithAggregatesFilter<"Promotion"> | string
    type?: EnumPromotionTypeWithAggregatesFilter<"Promotion"> | $Enums.PromotionType
    discountIDR?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    discountPct?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    maxUsage?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    currentUsage?: IntWithAggregatesFilter<"Promotion"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: StringFilter<"Point"> | string
    userId?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    expiresAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    userId?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    expiresAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Point"> | string
    userId?: StringWithAggregatesFilter<"Point"> | string
    amount?: IntWithAggregatesFilter<"Point"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
  }

  export type ReferralUsageWhereInput = {
    AND?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    OR?: ReferralUsageWhereInput[]
    NOT?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    id?: StringFilter<"ReferralUsage"> | string
    referrerId?: StringFilter<"ReferralUsage"> | string
    referredUserId?: StringFilter<"ReferralUsage"> | string
    usedAt?: DateTimeFilter<"ReferralUsage"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referredUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralUsageOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    usedAt?: SortOrder
    referrer?: UserOrderByWithRelationInput
    referredUser?: UserOrderByWithRelationInput
  }

  export type ReferralUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    OR?: ReferralUsageWhereInput[]
    NOT?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    referrerId?: StringFilter<"ReferralUsage"> | string
    referredUserId?: StringFilter<"ReferralUsage"> | string
    usedAt?: DateTimeFilter<"ReferralUsage"> | Date | string
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    referredUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralUsageOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    usedAt?: SortOrder
    _count?: ReferralUsageCountOrderByAggregateInput
    _max?: ReferralUsageMaxOrderByAggregateInput
    _min?: ReferralUsageMinOrderByAggregateInput
  }

  export type ReferralUsageScalarWhereWithAggregatesInput = {
    AND?: ReferralUsageScalarWhereWithAggregatesInput | ReferralUsageScalarWhereWithAggregatesInput[]
    OR?: ReferralUsageScalarWhereWithAggregatesInput[]
    NOT?: ReferralUsageScalarWhereWithAggregatesInput | ReferralUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralUsage"> | string
    referrerId?: StringWithAggregatesFilter<"ReferralUsage"> | string
    referredUserId?: StringWithAggregatesFilter<"ReferralUsage"> | string
    usedAt?: DateTimeWithAggregatesFilter<"ReferralUsage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    points?: PointCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutCreatedEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutCreatedEventsNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeCreateInput = {
    id?: string
    name: string
    price: number
    event: EventCreateNestedOneWithoutTicketTypesInput
    Transaction?: TransactionCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    eventId: string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput
    Transaction?: TransactionUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
    Transaction?: TransactionUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeCreateManyInput = {
    id?: string
    name: string
    price: number
    eventId: string
  }

  export type TicketTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TicketTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutTransactionsInput
    ticketType?: TicketTypeCreateNestedOneWithoutTransactionInput
    User?: UserCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    eventId: string
    ticketTypeId?: string | null
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneWithoutTransactionNestedInput
    User?: UserUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    eventId: string
    ticketTypeId?: string | null
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    code: string
    type: $Enums.PromotionType
    discountIDR?: number | null
    discountPct?: number | null
    maxUsage?: number | null
    currentUsage?: number
    expiresAt: Date | string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    eventId: string
    code: string
    type: $Enums.PromotionType
    discountIDR?: number | null
    discountPct?: number | null
    maxUsage?: number | null
    currentUsage?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutPromotionsNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyInput = {
    id?: string
    eventId: string
    code: string
    type: $Enums.PromotionType
    discountIDR?: number | null
    discountPct?: number | null
    maxUsage?: number | null
    currentUsage?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateManyInput = {
    id?: string
    userId: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageCreateInput = {
    id?: string
    usedAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralUsagesGivenInput
    referredUser: UserCreateNestedOneWithoutReferralUsagesReceivedInput
  }

  export type ReferralUsageUncheckedCreateInput = {
    id?: string
    referrerId: string
    referredUserId: string
    usedAt?: Date | string
  }

  export type ReferralUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralUsagesGivenNestedInput
    referredUser?: UserUpdateOneRequiredWithoutReferralUsagesReceivedNestedInput
  }

  export type ReferralUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredUserId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageCreateManyInput = {
    id?: string
    referrerId: string
    referredUserId: string
    usedAt?: Date | string
  }

  export type ReferralUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredUserId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ReferralUsageListRelationFilter = {
    every?: ReferralUsageWhereInput
    some?: ReferralUsageWhereInput
    none?: ReferralUsageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TicketTypeListRelationFilter = {
    every?: TicketTypeWhereInput
    some?: TicketTypeWhereInput
    none?: TicketTypeWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: PromotionWhereInput
    some?: PromotionWhereInput
    none?: PromotionWhereInput
  }

  export type TicketTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isFree?: SortOrder
    availableSeats?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    price?: SortOrder
    availableSeats?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isFree?: SortOrder
    availableSeats?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isFree?: SortOrder
    availableSeats?: SortOrder
    organizerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    price?: SortOrder
    availableSeats?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TicketTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
  }

  export type TicketTypeAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TicketTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
  }

  export type TicketTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    eventId?: SortOrder
  }

  export type TicketTypeSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TicketTypeNullableScalarRelationFilter = {
    is?: TicketTypeWhereInput | null
    isNot?: TicketTypeWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    userEmail?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    promoCode?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPaid?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    userEmail?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    promoCode?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketTypeId?: SortOrder
    userEmail?: SortOrder
    quantity?: SortOrder
    totalPaid?: SortOrder
    promoCode?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPaid?: SortOrder
  }

  export type EnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    discountIDR?: SortOrder
    discountPct?: SortOrder
    maxUsage?: SortOrder
    currentUsage?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    discountIDR?: SortOrder
    discountPct?: SortOrder
    maxUsage?: SortOrder
    currentUsage?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    discountIDR?: SortOrder
    discountPct?: SortOrder
    maxUsage?: SortOrder
    currentUsage?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    code?: SortOrder
    type?: SortOrder
    discountIDR?: SortOrder
    discountPct?: SortOrder
    maxUsage?: SortOrder
    currentUsage?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    discountIDR?: SortOrder
    discountPct?: SortOrder
    maxUsage?: SortOrder
    currentUsage?: SortOrder
  }

  export type EnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ReferralUsageCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    usedAt?: SortOrder
  }

  export type ReferralUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    usedAt?: SortOrder
  }

  export type ReferralUsageMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredUserId?: SortOrder
    usedAt?: SortOrder
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredByUserInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PointCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReferralUsageCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type ReferralUsageCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredUserInput, ReferralUsageUncheckedCreateWithoutReferredUserInput> | ReferralUsageCreateWithoutReferredUserInput[] | ReferralUsageUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredUserInput | ReferralUsageCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralUsageCreateManyReferredUserInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByUserInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredUserInput, ReferralUsageUncheckedCreateWithoutReferredUserInput> | ReferralUsageCreateWithoutReferredUserInput[] | ReferralUsageUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredUserInput | ReferralUsageCreateOrConnectWithoutReferredUserInput[]
    createMany?: ReferralUsageCreateManyReferredUserInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateManyWithoutReferredByUserNestedInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByUserInput | UserUpsertWithWhereUniqueWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByUserInput | UserUpdateWithWhereUniqueWithoutReferredByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByUserInput | UserUpdateManyWithWhereWithoutReferredByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReferralUsageUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput | ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput | ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferrerInput | ReferralUsageUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type ReferralUsageUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredUserInput, ReferralUsageUncheckedCreateWithoutReferredUserInput> | ReferralUsageCreateWithoutReferredUserInput[] | ReferralUsageUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredUserInput | ReferralUsageCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferredUserInput | ReferralUsageUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralUsageCreateManyReferredUserInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferredUserInput | ReferralUsageUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferredUserInput | ReferralUsageUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUncheckedUpdateManyWithoutReferredByUserNestedInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByUserInput | UserUpsertWithWhereUniqueWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByUserInput | UserUpdateWithWhereUniqueWithoutReferredByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByUserInput | UserUpdateManyWithWhereWithoutReferredByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput | ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput | ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferrerInput | ReferralUsageUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredUserInput, ReferralUsageUncheckedCreateWithoutReferredUserInput> | ReferralUsageCreateWithoutReferredUserInput[] | ReferralUsageUncheckedCreateWithoutReferredUserInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredUserInput | ReferralUsageCreateOrConnectWithoutReferredUserInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferredUserInput | ReferralUsageUpsertWithWhereUniqueWithoutReferredUserInput[]
    createMany?: ReferralUsageCreateManyReferredUserInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferredUserInput | ReferralUsageUpdateWithWhereUniqueWithoutReferredUserInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferredUserInput | ReferralUsageUpdateManyWithWhereWithoutReferredUserInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type TicketTypeCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PromotionCreateNestedManyWithoutEventInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput> | UserCreateWithoutCreatedEventsInput[] | UserUncheckedCreateWithoutCreatedEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput | UserCreateOrConnectWithoutCreatedEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TicketTypeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput> | UserCreateWithoutCreatedEventsInput[] | UserUncheckedCreateWithoutCreatedEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput | UserCreateOrConnectWithoutCreatedEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TicketTypeUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutEventInput | TicketTypeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutEventInput | TicketTypeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutEventInput | TicketTypeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PromotionUpdateManyWithoutEventNestedInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutEventInput | PromotionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutEventInput | PromotionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutEventInput | PromotionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput> | UserCreateWithoutCreatedEventsInput[] | UserUncheckedCreateWithoutCreatedEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput | UserCreateOrConnectWithoutCreatedEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedEventsInput | UserUpsertWithWhereUniqueWithoutCreatedEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedEventsInput | UserUpdateWithWhereUniqueWithoutCreatedEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedEventsInput | UserUpdateManyWithWhereWithoutCreatedEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TicketTypeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput> | TicketTypeCreateWithoutEventInput[] | TicketTypeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTypeCreateOrConnectWithoutEventInput | TicketTypeCreateOrConnectWithoutEventInput[]
    upsert?: TicketTypeUpsertWithWhereUniqueWithoutEventInput | TicketTypeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTypeCreateManyEventInputEnvelope
    set?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    disconnect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    delete?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    connect?: TicketTypeWhereUniqueInput | TicketTypeWhereUniqueInput[]
    update?: TicketTypeUpdateWithWhereUniqueWithoutEventInput | TicketTypeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTypeUpdateManyWithWhereWithoutEventInput | TicketTypeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutEventInput | PromotionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutEventInput | PromotionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutEventInput | PromotionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput> | UserCreateWithoutCreatedEventsInput[] | UserUncheckedCreateWithoutCreatedEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput | UserCreateOrConnectWithoutCreatedEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedEventsInput | UserUpsertWithWhereUniqueWithoutCreatedEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedEventsInput | UserUpdateWithWhereUniqueWithoutCreatedEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedEventsInput | UserUpdateManyWithWhereWithoutCreatedEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketTypesInput = {
    create?: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutTicketTypeInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTicketTypesNestedInput = {
    create?: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTypesInput
    upsert?: EventUpsertWithoutTicketTypesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketTypesInput, EventUpdateWithoutTicketTypesInput>, EventUncheckedUpdateWithoutTicketTypesInput>
  }

  export type TransactionUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketTypeInput | TransactionUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketTypeInput | TransactionUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketTypeInput | TransactionUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutTicketTypeNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput> | TransactionCreateWithoutTicketTypeInput[] | TransactionUncheckedCreateWithoutTicketTypeInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketTypeInput | TransactionCreateOrConnectWithoutTicketTypeInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketTypeInput | TransactionUpsertWithWhereUniqueWithoutTicketTypeInput[]
    createMany?: TransactionCreateManyTicketTypeInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketTypeInput | TransactionUpdateWithWhereUniqueWithoutTicketTypeInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketTypeInput | TransactionUpdateManyWithWhereWithoutTicketTypeInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    connect?: EventWhereUniqueInput
  }

  export type TicketTypeCreateNestedOneWithoutTransactionInput = {
    create?: XOR<TicketTypeCreateWithoutTransactionInput, TicketTypeUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTransactionInput
    connect?: TicketTypeWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput> | UserCreateWithoutTransactionsInput[] | UserUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | UserCreateOrConnectWithoutTransactionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput> | UserCreateWithoutTransactionsInput[] | UserUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | UserCreateOrConnectWithoutTransactionsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    upsert?: EventUpsertWithoutTransactionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTransactionsInput, EventUpdateWithoutTransactionsInput>, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketTypeUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<TicketTypeCreateWithoutTransactionInput, TicketTypeUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TicketTypeCreateOrConnectWithoutTransactionInput
    upsert?: TicketTypeUpsertWithoutTransactionInput
    disconnect?: TicketTypeWhereInput | boolean
    delete?: TicketTypeWhereInput | boolean
    connect?: TicketTypeWhereUniqueInput
    update?: XOR<XOR<TicketTypeUpdateToOneWithWhereWithoutTransactionInput, TicketTypeUpdateWithoutTransactionInput>, TicketTypeUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput> | UserCreateWithoutTransactionsInput[] | UserUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | UserCreateOrConnectWithoutTransactionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTransactionsInput | UserUpsertWithWhereUniqueWithoutTransactionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTransactionsInput | UserUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTransactionsInput | UserUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput> | UserCreateWithoutTransactionsInput[] | UserUncheckedCreateWithoutTransactionsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | UserCreateOrConnectWithoutTransactionsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTransactionsInput | UserUpsertWithWhereUniqueWithoutTransactionsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTransactionsInput | UserUpdateWithWhereUniqueWithoutTransactionsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTransactionsInput | UserUpdateManyWithWhereWithoutTransactionsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPromotionsInput
    connect?: EventWhereUniqueInput
  }

  export type EnumPromotionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PromotionType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutPromotionsNestedInput = {
    create?: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPromotionsInput
    upsert?: EventUpsertWithoutPromotionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPromotionsInput, EventUpdateWithoutPromotionsInput>, EventUncheckedUpdateWithoutPromotionsInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserCreateNestedOneWithoutReferralUsagesGivenInput = {
    create?: XOR<UserCreateWithoutReferralUsagesGivenInput, UserUncheckedCreateWithoutReferralUsagesGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralUsagesGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralUsagesReceivedInput = {
    create?: XOR<UserCreateWithoutReferralUsagesReceivedInput, UserUncheckedCreateWithoutReferralUsagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralUsagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralUsagesGivenNestedInput = {
    create?: XOR<UserCreateWithoutReferralUsagesGivenInput, UserUncheckedCreateWithoutReferralUsagesGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralUsagesGivenInput
    upsert?: UserUpsertWithoutReferralUsagesGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralUsagesGivenInput, UserUpdateWithoutReferralUsagesGivenInput>, UserUncheckedUpdateWithoutReferralUsagesGivenInput>
  }

  export type UserUpdateOneRequiredWithoutReferralUsagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutReferralUsagesReceivedInput, UserUncheckedCreateWithoutReferralUsagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralUsagesReceivedInput
    upsert?: UserUpsertWithoutReferralUsagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralUsagesReceivedInput, UserUpdateWithoutReferralUsagesReceivedInput>, UserUncheckedUpdateWithoutReferralUsagesReceivedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserCreateWithoutReferralsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    points?: PointCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferredByUserInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    points?: PointCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutReferredByUserInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutReferredByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput>
  }

  export type UserCreateManyReferredByUserInputEnvelope = {
    data: UserCreateManyReferredByUserInput | UserCreateManyReferredByUserInput[]
    skipDuplicates?: boolean
  }

  export type PointCreateWithoutUserInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PointUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PointCreateOrConnectWithoutUserInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointCreateManyUserInputEnvelope = {
    data: PointCreateManyUserInput | PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutTransactionsInput
    ticketType?: TicketTypeCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    ticketTypeId?: string | null
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type ReferralUsageCreateWithoutReferrerInput = {
    id?: string
    usedAt?: Date | string
    referredUser: UserCreateNestedOneWithoutReferralUsagesReceivedInput
  }

  export type ReferralUsageUncheckedCreateWithoutReferrerInput = {
    id?: string
    referredUserId: string
    usedAt?: Date | string
  }

  export type ReferralUsageCreateOrConnectWithoutReferrerInput = {
    where: ReferralUsageWhereUniqueInput
    create: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralUsageCreateManyReferrerInputEnvelope = {
    data: ReferralUsageCreateManyReferrerInput | ReferralUsageCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReferralUsageCreateWithoutReferredUserInput = {
    id?: string
    usedAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferralUsagesGivenInput
  }

  export type ReferralUsageUncheckedCreateWithoutReferredUserInput = {
    id?: string
    referrerId: string
    usedAt?: Date | string
  }

  export type ReferralUsageCreateOrConnectWithoutReferredUserInput = {
    where: ReferralUsageWhereUniqueInput
    create: XOR<ReferralUsageCreateWithoutReferredUserInput, ReferralUsageUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralUsageCreateManyReferredUserInputEnvelope = {
    data: ReferralUsageCreateManyReferredUserInput | ReferralUsageCreateManyReferredUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByUserInput, UserUncheckedUpdateWithoutReferredByUserInput>
    create: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByUserInput, UserUncheckedUpdateWithoutReferredByUserInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    referralCode?: StringFilter<"User"> | string
    referredBy?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PointUpsertWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointUpdateWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithWhereWithoutUserInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutUserInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: StringFilter<"Point"> | string
    userId?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    expiresAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    time?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    category?: StringFilter<"Event"> | string
    imageUrl?: StringNullableFilter<"Event"> | string | null
    price?: IntFilter<"Event"> | number
    isFree?: BoolFilter<"Event"> | boolean
    availableSeats?: IntFilter<"Event"> | number
    organizerId?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketTypeId?: StringNullableFilter<"Transaction"> | string | null
    userEmail?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    totalPaid?: IntFilter<"Transaction"> | number
    promoCode?: StringNullableFilter<"Transaction"> | string | null
    referralCode?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralUsageWhereUniqueInput
    update: XOR<ReferralUsageUpdateWithoutReferrerInput, ReferralUsageUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralUsageWhereUniqueInput
    data: XOR<ReferralUsageUpdateWithoutReferrerInput, ReferralUsageUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralUsageUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralUsageScalarWhereInput
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReferralUsageScalarWhereInput = {
    AND?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
    OR?: ReferralUsageScalarWhereInput[]
    NOT?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
    id?: StringFilter<"ReferralUsage"> | string
    referrerId?: StringFilter<"ReferralUsage"> | string
    referredUserId?: StringFilter<"ReferralUsage"> | string
    usedAt?: DateTimeFilter<"ReferralUsage"> | Date | string
  }

  export type ReferralUsageUpsertWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralUsageWhereUniqueInput
    update: XOR<ReferralUsageUpdateWithoutReferredUserInput, ReferralUsageUncheckedUpdateWithoutReferredUserInput>
    create: XOR<ReferralUsageCreateWithoutReferredUserInput, ReferralUsageUncheckedCreateWithoutReferredUserInput>
  }

  export type ReferralUsageUpdateWithWhereUniqueWithoutReferredUserInput = {
    where: ReferralUsageWhereUniqueInput
    data: XOR<ReferralUsageUpdateWithoutReferredUserInput, ReferralUsageUncheckedUpdateWithoutReferredUserInput>
  }

  export type ReferralUsageUpdateManyWithWhereWithoutReferredUserInput = {
    where: ReferralUsageScalarWhereInput
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyWithoutReferredUserInput>
  }

  export type TicketTypeCreateWithoutEventInput = {
    id?: string
    name: string
    price: number
    Transaction?: TransactionCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeUncheckedCreateWithoutEventInput = {
    id?: string
    name: string
    price: number
    Transaction?: TransactionUncheckedCreateNestedManyWithoutTicketTypeInput
  }

  export type TicketTypeCreateOrConnectWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput>
  }

  export type TicketTypeCreateManyEventInputEnvelope = {
    data: TicketTypeCreateManyEventInput | TicketTypeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEventInput = {
    id?: string
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    ticketType?: TicketTypeCreateNestedOneWithoutTransactionInput
    User?: UserCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutEventInput = {
    id?: string
    ticketTypeId?: string | null
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionCreateOrConnectWithoutEventInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionCreateManyEventInputEnvelope = {
    data: TransactionCreateManyEventInput | TransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PromotionCreateWithoutEventInput = {
    id?: string
    code: string
    type: $Enums.PromotionType
    discountIDR?: number | null
    discountPct?: number | null
    maxUsage?: number | null
    currentUsage?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionUncheckedCreateWithoutEventInput = {
    id?: string
    code: string
    type: $Enums.PromotionType
    discountIDR?: number | null
    discountPct?: number | null
    maxUsage?: number | null
    currentUsage?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionCreateOrConnectWithoutEventInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput>
  }

  export type PromotionCreateManyEventInputEnvelope = {
    data: PromotionCreateManyEventInput | PromotionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedEventsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    points?: PointCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type TicketTypeUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    update: XOR<TicketTypeUpdateWithoutEventInput, TicketTypeUncheckedUpdateWithoutEventInput>
    create: XOR<TicketTypeCreateWithoutEventInput, TicketTypeUncheckedCreateWithoutEventInput>
  }

  export type TicketTypeUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketTypeWhereUniqueInput
    data: XOR<TicketTypeUpdateWithoutEventInput, TicketTypeUncheckedUpdateWithoutEventInput>
  }

  export type TicketTypeUpdateManyWithWhereWithoutEventInput = {
    where: TicketTypeScalarWhereInput
    data: XOR<TicketTypeUpdateManyMutationInput, TicketTypeUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketTypeScalarWhereInput = {
    AND?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    OR?: TicketTypeScalarWhereInput[]
    NOT?: TicketTypeScalarWhereInput | TicketTypeScalarWhereInput[]
    id?: StringFilter<"TicketType"> | string
    name?: StringFilter<"TicketType"> | string
    price?: IntFilter<"TicketType"> | number
    eventId?: StringFilter<"TicketType"> | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEventInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type PromotionUpsertWithWhereUniqueWithoutEventInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutEventInput, PromotionUncheckedUpdateWithoutEventInput>
    create: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutEventInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutEventInput, PromotionUncheckedUpdateWithoutEventInput>
  }

  export type PromotionUpdateManyWithWhereWithoutEventInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutEventInput>
  }

  export type PromotionScalarWhereInput = {
    AND?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    OR?: PromotionScalarWhereInput[]
    NOT?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    id?: StringFilter<"Promotion"> | string
    eventId?: StringFilter<"Promotion"> | string
    code?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    discountIDR?: IntNullableFilter<"Promotion"> | number | null
    discountPct?: IntNullableFilter<"Promotion"> | number | null
    maxUsage?: IntNullableFilter<"Promotion"> | number | null
    currentUsage?: IntFilter<"Promotion"> | number
    expiresAt?: DateTimeFilter<"Promotion"> | Date | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedEventsInput>
  }

  export type EventCreateWithoutTicketTypesInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventUncheckedCreateWithoutTicketTypesInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventCreateOrConnectWithoutTicketTypesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
  }

  export type TransactionCreateWithoutTicketTypeInput = {
    id?: string
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutTransactionsInput
    User?: UserCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutTicketTypeInput = {
    id?: string
    eventId: string
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutTransactionsInput
  }

  export type TransactionCreateOrConnectWithoutTicketTypeInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput>
  }

  export type TransactionCreateManyTicketTypeInputEnvelope = {
    data: TransactionCreateManyTicketTypeInput | TransactionCreateManyTicketTypeInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTicketTypesInput = {
    update: XOR<EventUpdateWithoutTicketTypesInput, EventUncheckedUpdateWithoutTicketTypesInput>
    create: XOR<EventCreateWithoutTicketTypesInput, EventUncheckedCreateWithoutTicketTypesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketTypesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketTypesInput, EventUncheckedUpdateWithoutTicketTypesInput>
  }

  export type EventUpdateWithoutTicketTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutCreatedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutCreatedEventsNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutTicketTypeInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTicketTypeInput, TransactionUncheckedUpdateWithoutTicketTypeInput>
    create: XOR<TransactionCreateWithoutTicketTypeInput, TransactionUncheckedCreateWithoutTicketTypeInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTicketTypeInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTicketTypeInput, TransactionUncheckedUpdateWithoutTicketTypeInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTicketTypeInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTicketTypeInput>
  }

  export type EventCreateWithoutTransactionsInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventUncheckedCreateWithoutTransactionsInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventCreateOrConnectWithoutTransactionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
  }

  export type TicketTypeCreateWithoutTransactionInput = {
    id?: string
    name: string
    price: number
    event: EventCreateNestedOneWithoutTicketTypesInput
  }

  export type TicketTypeUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    price: number
    eventId: string
  }

  export type TicketTypeCreateOrConnectWithoutTransactionInput = {
    where: TicketTypeWhereUniqueInput
    create: XOR<TicketTypeCreateWithoutTransactionInput, TicketTypeUncheckedCreateWithoutTransactionInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    points?: PointCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type EventUpsertWithoutTransactionsInput = {
    update: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutCreatedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutCreatedEventsNestedInput
  }

  export type TicketTypeUpsertWithoutTransactionInput = {
    update: XOR<TicketTypeUpdateWithoutTransactionInput, TicketTypeUncheckedUpdateWithoutTransactionInput>
    create: XOR<TicketTypeCreateWithoutTransactionInput, TicketTypeUncheckedCreateWithoutTransactionInput>
    where?: TicketTypeWhereInput
  }

  export type TicketTypeUpdateToOneWithWhereWithoutTransactionInput = {
    where?: TicketTypeWhereInput
    data: XOR<TicketTypeUpdateWithoutTransactionInput, TicketTypeUncheckedUpdateWithoutTransactionInput>
  }

  export type TicketTypeUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    event?: EventUpdateOneRequiredWithoutTicketTypesNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithWhereUniqueWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateManyWithWhereWithoutTransactionsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTransactionsInput>
  }

  export type EventCreateWithoutPromotionsInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventUncheckedCreateWithoutPromotionsInput = {
    id?: string
    title: string
    description: string
    date: Date | string
    time: string
    location: string
    category: string
    imageUrl?: string | null
    price: number
    isFree?: boolean
    availableSeats: number
    organizerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketTypes?: TicketTypeUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutCreatedEventsInput
  }

  export type EventCreateOrConnectWithoutPromotionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
  }

  export type EventUpsertWithoutPromotionsInput = {
    update: XOR<EventUpdateWithoutPromotionsInput, EventUncheckedUpdateWithoutPromotionsInput>
    create: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPromotionsInput, EventUncheckedUpdateWithoutPromotionsInput>
  }

  export type EventUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutCreatedEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutCreatedEventsNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserCreateWithoutReferralUsagesGivenInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    points?: PointCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesReceived?: ReferralUsageCreateNestedManyWithoutReferredUserInput
  }

  export type UserUncheckedCreateWithoutReferralUsagesGivenInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesReceived?: ReferralUsageUncheckedCreateNestedManyWithoutReferredUserInput
  }

  export type UserCreateOrConnectWithoutReferralUsagesGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralUsagesGivenInput, UserUncheckedCreateWithoutReferralUsagesGivenInput>
  }

  export type UserCreateWithoutReferralUsagesReceivedInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferralsInput
    referrals?: UserCreateNestedManyWithoutReferredByUserInput
    points?: PointCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageCreateNestedManyWithoutReferrerInput
  }

  export type UserUncheckedCreateWithoutReferralUsagesReceivedInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    referredBy?: string | null
    createdAt?: Date | string
    referrals?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    referralUsagesGiven?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
  }

  export type UserCreateOrConnectWithoutReferralUsagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralUsagesReceivedInput, UserUncheckedCreateWithoutReferralUsagesReceivedInput>
  }

  export type UserUpsertWithoutReferralUsagesGivenInput = {
    update: XOR<UserUpdateWithoutReferralUsagesGivenInput, UserUncheckedUpdateWithoutReferralUsagesGivenInput>
    create: XOR<UserCreateWithoutReferralUsagesGivenInput, UserUncheckedCreateWithoutReferralUsagesGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralUsagesGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralUsagesGivenInput, UserUncheckedUpdateWithoutReferralUsagesGivenInput>
  }

  export type UserUpdateWithoutReferralUsagesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralUsagesGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUpsertWithoutReferralUsagesReceivedInput = {
    update: XOR<UserUpdateWithoutReferralUsagesReceivedInput, UserUncheckedUpdateWithoutReferralUsagesReceivedInput>
    create: XOR<UserCreateWithoutReferralUsagesReceivedInput, UserUncheckedCreateWithoutReferralUsagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralUsagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralUsagesReceivedInput, UserUncheckedUpdateWithoutReferralUsagesReceivedInput>
  }

  export type UserUpdateWithoutReferralUsagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralUsagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
  }

  export type UserCreateManyReferredByUserInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.UserRole
    referralCode: string
    createdAt?: Date | string
  }

  export type PointCreateManyUserInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReferralUsageCreateManyReferrerInput = {
    id?: string
    referredUserId: string
    usedAt?: Date | string
  }

  export type ReferralUsageCreateManyReferredUserInput = {
    id?: string
    referrerId: string
    usedAt?: Date | string
  }

  export type UserUpdateWithoutReferredByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketTypes?: TicketTypeUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    isFree?: BoolFieldUpdateOperationsInput | boolean
    availableSeats?: IntFieldUpdateOperationsInput | number
    organizerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticketType?: TicketTypeUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUser?: UserUpdateOneRequiredWithoutReferralUsagesReceivedNestedInput
  }

  export type ReferralUsageUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredUserId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredUserId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUpdateWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferralUsagesGivenNestedInput
  }

  export type ReferralUsageUncheckedUpdateWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferredUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    usedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketTypeCreateManyEventInput = {
    id?: string
    name: string
    price: number
  }

  export type TransactionCreateManyEventInput = {
    id?: string
    ticketTypeId?: string | null
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
  }

  export type PromotionCreateManyEventInput = {
    id?: string
    code: string
    type: $Enums.PromotionType
    discountIDR?: number | null
    discountPct?: number | null
    maxUsage?: number | null
    currentUsage?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TicketTypeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Transaction?: TransactionUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    Transaction?: TransactionUncheckedUpdateManyWithoutTicketTypeNestedInput
  }

  export type TicketTypeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketType?: TicketTypeUpdateOneWithoutTransactionNestedInput
    User?: UserUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketTypeId?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    discountIDR?: NullableIntFieldUpdateOperationsInput | number | null
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsage?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCreatedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyTicketTypeInput = {
    id?: string
    eventId: string
    userEmail: string
    quantity: number
    totalPaid: number
    promoCode?: string | null
    referralCode?: string | null
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    User?: UserUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutTicketTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPaid?: IntFieldUpdateOperationsInput | number
    promoCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferralsNestedInput
    referrals?: UserUpdateManyWithoutReferredByUserNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutUserNestedInput
    referralUsagesGiven?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    referralUsagesReceived?: ReferralUsageUncheckedUpdateManyWithoutReferredUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
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