
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
 * Model Entreprises
 * 
 */
export type Entreprises = $Result.DefaultSelection<Prisma.$EntreprisesPayload>
/**
 * Model Utilisateurs
 * 
 */
export type Utilisateurs = $Result.DefaultSelection<Prisma.$UtilisateursPayload>
/**
 * Model Devises
 * 
 */
export type Devises = $Result.DefaultSelection<Prisma.$DevisesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Statut: {
  ACTIF: 'ACTIF',
  INACTIF: 'INACTIF'
};

export type Statut = (typeof Statut)[keyof typeof Statut]


export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  CAISSIER: 'CAISSIER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Statut = $Enums.Statut

export const Statut: typeof $Enums.Statut

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Entreprises
 * const entreprises = await prisma.entreprises.findMany()
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
   * // Fetch zero or more Entreprises
   * const entreprises = await prisma.entreprises.findMany()
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
   * `prisma.entreprises`: Exposes CRUD operations for the **Entreprises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entreprises
    * const entreprises = await prisma.entreprises.findMany()
    * ```
    */
  get entreprises(): Prisma.EntreprisesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilisateurs`: Exposes CRUD operations for the **Utilisateurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateurs.findMany()
    * ```
    */
  get utilisateurs(): Prisma.UtilisateursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.devises`: Exposes CRUD operations for the **Devises** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devises
    * const devises = await prisma.devises.findMany()
    * ```
    */
  get devises(): Prisma.DevisesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Entreprises: 'Entreprises',
    Utilisateurs: 'Utilisateurs',
    Devises: 'Devises'
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
      modelProps: "entreprises" | "utilisateurs" | "devises"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Entreprises: {
        payload: Prisma.$EntreprisesPayload<ExtArgs>
        fields: Prisma.EntreprisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntreprisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntreprisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>
          }
          findFirst: {
            args: Prisma.EntreprisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntreprisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>
          }
          findMany: {
            args: Prisma.EntreprisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>[]
          }
          create: {
            args: Prisma.EntreprisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>
          }
          createMany: {
            args: Prisma.EntreprisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EntreprisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>
          }
          update: {
            args: Prisma.EntreprisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>
          }
          deleteMany: {
            args: Prisma.EntreprisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntreprisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EntreprisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntreprisesPayload>
          }
          aggregate: {
            args: Prisma.EntreprisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntreprises>
          }
          groupBy: {
            args: Prisma.EntreprisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntreprisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntreprisesCountArgs<ExtArgs>
            result: $Utils.Optional<EntreprisesCountAggregateOutputType> | number
          }
        }
      }
      Utilisateurs: {
        payload: Prisma.$UtilisateursPayload<ExtArgs>
        fields: Prisma.UtilisateursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          findFirst: {
            args: Prisma.UtilisateursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          findMany: {
            args: Prisma.UtilisateursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>[]
          }
          create: {
            args: Prisma.UtilisateursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          createMany: {
            args: Prisma.UtilisateursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilisateursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          update: {
            args: Prisma.UtilisateursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          aggregate: {
            args: Prisma.UtilisateursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateurs>
          }
          groupBy: {
            args: Prisma.UtilisateursGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateursCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursCountAggregateOutputType> | number
          }
        }
      }
      Devises: {
        payload: Prisma.$DevisesPayload<ExtArgs>
        fields: Prisma.DevisesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DevisesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DevisesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>
          }
          findFirst: {
            args: Prisma.DevisesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DevisesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>
          }
          findMany: {
            args: Prisma.DevisesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>[]
          }
          create: {
            args: Prisma.DevisesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>
          }
          createMany: {
            args: Prisma.DevisesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DevisesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>
          }
          update: {
            args: Prisma.DevisesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>
          }
          deleteMany: {
            args: Prisma.DevisesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DevisesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DevisesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevisesPayload>
          }
          aggregate: {
            args: Prisma.DevisesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevises>
          }
          groupBy: {
            args: Prisma.DevisesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DevisesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DevisesCountArgs<ExtArgs>
            result: $Utils.Optional<DevisesCountAggregateOutputType> | number
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
    entreprises?: EntreprisesOmit
    utilisateurs?: UtilisateursOmit
    devises?: DevisesOmit
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
   * Count Type EntreprisesCountOutputType
   */

  export type EntreprisesCountOutputType = {
    Utilisateurs: number
  }

  export type EntreprisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateurs?: boolean | EntreprisesCountOutputTypeCountUtilisateursArgs
  }

  // Custom InputTypes
  /**
   * EntreprisesCountOutputType without action
   */
  export type EntreprisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntreprisesCountOutputType
     */
    select?: EntreprisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntreprisesCountOutputType without action
   */
  export type EntreprisesCountOutputTypeCountUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateursWhereInput
  }


  /**
   * Count Type DevisesCountOutputType
   */

  export type DevisesCountOutputType = {
    entreprises: number
  }

  export type DevisesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | DevisesCountOutputTypeCountEntreprisesArgs
  }

  // Custom InputTypes
  /**
   * DevisesCountOutputType without action
   */
  export type DevisesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DevisesCountOutputType
     */
    select?: DevisesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DevisesCountOutputType without action
   */
  export type DevisesCountOutputTypeCountEntreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntreprisesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Entreprises
   */

  export type AggregateEntreprises = {
    _count: EntreprisesCountAggregateOutputType | null
    _avg: EntreprisesAvgAggregateOutputType | null
    _sum: EntreprisesSumAggregateOutputType | null
    _min: EntreprisesMinAggregateOutputType | null
    _max: EntreprisesMaxAggregateOutputType | null
  }

  export type EntreprisesAvgAggregateOutputType = {
    id: number | null
    deviseId: number | null
  }

  export type EntreprisesSumAggregateOutputType = {
    id: number | null
    deviseId: number | null
  }

  export type EntreprisesMinAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    telephone: string | null
    dbKey: string | null
    Statut: $Enums.Statut | null
    date_creation: Date | null
    deviseId: number | null
  }

  export type EntreprisesMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    telephone: string | null
    dbKey: string | null
    Statut: $Enums.Statut | null
    date_creation: Date | null
    deviseId: number | null
  }

  export type EntreprisesCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    telephone: number
    dbKey: number
    Statut: number
    date_creation: number
    deviseId: number
    _all: number
  }


  export type EntreprisesAvgAggregateInputType = {
    id?: true
    deviseId?: true
  }

  export type EntreprisesSumAggregateInputType = {
    id?: true
    deviseId?: true
  }

  export type EntreprisesMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    telephone?: true
    dbKey?: true
    Statut?: true
    date_creation?: true
    deviseId?: true
  }

  export type EntreprisesMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    telephone?: true
    dbKey?: true
    Statut?: true
    date_creation?: true
    deviseId?: true
  }

  export type EntreprisesCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    telephone?: true
    dbKey?: true
    Statut?: true
    date_creation?: true
    deviseId?: true
    _all?: true
  }

  export type EntreprisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to aggregate.
     */
    where?: EntreprisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntreprisesOrderByWithRelationInput | EntreprisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntreprisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entreprises
    **/
    _count?: true | EntreprisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntreprisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntreprisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntreprisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntreprisesMaxAggregateInputType
  }

  export type GetEntreprisesAggregateType<T extends EntreprisesAggregateArgs> = {
        [P in keyof T & keyof AggregateEntreprises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntreprises[P]>
      : GetScalarType<T[P], AggregateEntreprises[P]>
  }




  export type EntreprisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntreprisesWhereInput
    orderBy?: EntreprisesOrderByWithAggregationInput | EntreprisesOrderByWithAggregationInput[]
    by: EntreprisesScalarFieldEnum[] | EntreprisesScalarFieldEnum
    having?: EntreprisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntreprisesCountAggregateInputType | true
    _avg?: EntreprisesAvgAggregateInputType
    _sum?: EntreprisesSumAggregateInputType
    _min?: EntreprisesMinAggregateInputType
    _max?: EntreprisesMaxAggregateInputType
  }

  export type EntreprisesGroupByOutputType = {
    id: number
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut: $Enums.Statut
    date_creation: Date | null
    deviseId: number
    _count: EntreprisesCountAggregateOutputType | null
    _avg: EntreprisesAvgAggregateOutputType | null
    _sum: EntreprisesSumAggregateOutputType | null
    _min: EntreprisesMinAggregateOutputType | null
    _max: EntreprisesMaxAggregateOutputType | null
  }

  type GetEntreprisesGroupByPayload<T extends EntreprisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntreprisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntreprisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntreprisesGroupByOutputType[P]>
            : GetScalarType<T[P], EntreprisesGroupByOutputType[P]>
        }
      >
    >


  export type EntreprisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    telephone?: boolean
    dbKey?: boolean
    Statut?: boolean
    date_creation?: boolean
    deviseId?: boolean
    devises?: boolean | DevisesDefaultArgs<ExtArgs>
    Utilisateurs?: boolean | Entreprises$UtilisateursArgs<ExtArgs>
    _count?: boolean | EntreprisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entreprises"]>



  export type EntreprisesSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    telephone?: boolean
    dbKey?: boolean
    Statut?: boolean
    date_creation?: boolean
    deviseId?: boolean
  }

  export type EntreprisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "telephone" | "dbKey" | "Statut" | "date_creation" | "deviseId", ExtArgs["result"]["entreprises"]>
  export type EntreprisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devises?: boolean | DevisesDefaultArgs<ExtArgs>
    Utilisateurs?: boolean | Entreprises$UtilisateursArgs<ExtArgs>
    _count?: boolean | EntreprisesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EntreprisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entreprises"
    objects: {
      devises: Prisma.$DevisesPayload<ExtArgs>
      Utilisateurs: Prisma.$UtilisateursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      email: string
      telephone: string
      dbKey: string
      Statut: $Enums.Statut
      date_creation: Date | null
      deviseId: number
    }, ExtArgs["result"]["entreprises"]>
    composites: {}
  }

  type EntreprisesGetPayload<S extends boolean | null | undefined | EntreprisesDefaultArgs> = $Result.GetResult<Prisma.$EntreprisesPayload, S>

  type EntreprisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntreprisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntreprisesCountAggregateInputType | true
    }

  export interface EntreprisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entreprises'], meta: { name: 'Entreprises' } }
    /**
     * Find zero or one Entreprises that matches the filter.
     * @param {EntreprisesFindUniqueArgs} args - Arguments to find a Entreprises
     * @example
     * // Get one Entreprises
     * const entreprises = await prisma.entreprises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntreprisesFindUniqueArgs>(args: SelectSubset<T, EntreprisesFindUniqueArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entreprises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntreprisesFindUniqueOrThrowArgs} args - Arguments to find a Entreprises
     * @example
     * // Get one Entreprises
     * const entreprises = await prisma.entreprises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntreprisesFindUniqueOrThrowArgs>(args: SelectSubset<T, EntreprisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesFindFirstArgs} args - Arguments to find a Entreprises
     * @example
     * // Get one Entreprises
     * const entreprises = await prisma.entreprises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntreprisesFindFirstArgs>(args?: SelectSubset<T, EntreprisesFindFirstArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entreprises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesFindFirstOrThrowArgs} args - Arguments to find a Entreprises
     * @example
     * // Get one Entreprises
     * const entreprises = await prisma.entreprises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntreprisesFindFirstOrThrowArgs>(args?: SelectSubset<T, EntreprisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entreprises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entreprises
     * const entreprises = await prisma.entreprises.findMany()
     * 
     * // Get first 10 Entreprises
     * const entreprises = await prisma.entreprises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entreprisesWithIdOnly = await prisma.entreprises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntreprisesFindManyArgs>(args?: SelectSubset<T, EntreprisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entreprises.
     * @param {EntreprisesCreateArgs} args - Arguments to create a Entreprises.
     * @example
     * // Create one Entreprises
     * const Entreprises = await prisma.entreprises.create({
     *   data: {
     *     // ... data to create a Entreprises
     *   }
     * })
     * 
     */
    create<T extends EntreprisesCreateArgs>(args: SelectSubset<T, EntreprisesCreateArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entreprises.
     * @param {EntreprisesCreateManyArgs} args - Arguments to create many Entreprises.
     * @example
     * // Create many Entreprises
     * const entreprises = await prisma.entreprises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntreprisesCreateManyArgs>(args?: SelectSubset<T, EntreprisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Entreprises.
     * @param {EntreprisesDeleteArgs} args - Arguments to delete one Entreprises.
     * @example
     * // Delete one Entreprises
     * const Entreprises = await prisma.entreprises.delete({
     *   where: {
     *     // ... filter to delete one Entreprises
     *   }
     * })
     * 
     */
    delete<T extends EntreprisesDeleteArgs>(args: SelectSubset<T, EntreprisesDeleteArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entreprises.
     * @param {EntreprisesUpdateArgs} args - Arguments to update one Entreprises.
     * @example
     * // Update one Entreprises
     * const entreprises = await prisma.entreprises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntreprisesUpdateArgs>(args: SelectSubset<T, EntreprisesUpdateArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entreprises.
     * @param {EntreprisesDeleteManyArgs} args - Arguments to filter Entreprises to delete.
     * @example
     * // Delete a few Entreprises
     * const { count } = await prisma.entreprises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntreprisesDeleteManyArgs>(args?: SelectSubset<T, EntreprisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entreprises
     * const entreprises = await prisma.entreprises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntreprisesUpdateManyArgs>(args: SelectSubset<T, EntreprisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entreprises.
     * @param {EntreprisesUpsertArgs} args - Arguments to update or create a Entreprises.
     * @example
     * // Update or create a Entreprises
     * const entreprises = await prisma.entreprises.upsert({
     *   create: {
     *     // ... data to create a Entreprises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entreprises we want to update
     *   }
     * })
     */
    upsert<T extends EntreprisesUpsertArgs>(args: SelectSubset<T, EntreprisesUpsertArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesCountArgs} args - Arguments to filter Entreprises to count.
     * @example
     * // Count the number of Entreprises
     * const count = await prisma.entreprises.count({
     *   where: {
     *     // ... the filter for the Entreprises we want to count
     *   }
     * })
    **/
    count<T extends EntreprisesCountArgs>(
      args?: Subset<T, EntreprisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntreprisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntreprisesAggregateArgs>(args: Subset<T, EntreprisesAggregateArgs>): Prisma.PrismaPromise<GetEntreprisesAggregateType<T>>

    /**
     * Group by Entreprises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntreprisesGroupByArgs} args - Group by arguments.
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
      T extends EntreprisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntreprisesGroupByArgs['orderBy'] }
        : { orderBy?: EntreprisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntreprisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntreprisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entreprises model
   */
  readonly fields: EntreprisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entreprises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntreprisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    devises<T extends DevisesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DevisesDefaultArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Utilisateurs<T extends Entreprises$UtilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Entreprises$UtilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entreprises model
   */
  interface EntreprisesFieldRefs {
    readonly id: FieldRef<"Entreprises", 'Int'>
    readonly nom: FieldRef<"Entreprises", 'String'>
    readonly email: FieldRef<"Entreprises", 'String'>
    readonly telephone: FieldRef<"Entreprises", 'String'>
    readonly dbKey: FieldRef<"Entreprises", 'String'>
    readonly Statut: FieldRef<"Entreprises", 'Statut'>
    readonly date_creation: FieldRef<"Entreprises", 'DateTime'>
    readonly deviseId: FieldRef<"Entreprises", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Entreprises findUnique
   */
  export type EntreprisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where: EntreprisesWhereUniqueInput
  }

  /**
   * Entreprises findUniqueOrThrow
   */
  export type EntreprisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where: EntreprisesWhereUniqueInput
  }

  /**
   * Entreprises findFirst
   */
  export type EntreprisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntreprisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntreprisesOrderByWithRelationInput | EntreprisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntreprisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntreprisesScalarFieldEnum | EntreprisesScalarFieldEnum[]
  }

  /**
   * Entreprises findFirstOrThrow
   */
  export type EntreprisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntreprisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntreprisesOrderByWithRelationInput | EntreprisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entreprises.
     */
    cursor?: EntreprisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entreprises.
     */
    distinct?: EntreprisesScalarFieldEnum | EntreprisesScalarFieldEnum[]
  }

  /**
   * Entreprises findMany
   */
  export type EntreprisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * Filter, which Entreprises to fetch.
     */
    where?: EntreprisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entreprises to fetch.
     */
    orderBy?: EntreprisesOrderByWithRelationInput | EntreprisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entreprises.
     */
    cursor?: EntreprisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entreprises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entreprises.
     */
    skip?: number
    distinct?: EntreprisesScalarFieldEnum | EntreprisesScalarFieldEnum[]
  }

  /**
   * Entreprises create
   */
  export type EntreprisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * The data needed to create a Entreprises.
     */
    data: XOR<EntreprisesCreateInput, EntreprisesUncheckedCreateInput>
  }

  /**
   * Entreprises createMany
   */
  export type EntreprisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entreprises.
     */
    data: EntreprisesCreateManyInput | EntreprisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entreprises update
   */
  export type EntreprisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * The data needed to update a Entreprises.
     */
    data: XOR<EntreprisesUpdateInput, EntreprisesUncheckedUpdateInput>
    /**
     * Choose, which Entreprises to update.
     */
    where: EntreprisesWhereUniqueInput
  }

  /**
   * Entreprises updateMany
   */
  export type EntreprisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entreprises.
     */
    data: XOR<EntreprisesUpdateManyMutationInput, EntreprisesUncheckedUpdateManyInput>
    /**
     * Filter which Entreprises to update
     */
    where?: EntreprisesWhereInput
    /**
     * Limit how many Entreprises to update.
     */
    limit?: number
  }

  /**
   * Entreprises upsert
   */
  export type EntreprisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * The filter to search for the Entreprises to update in case it exists.
     */
    where: EntreprisesWhereUniqueInput
    /**
     * In case the Entreprises found by the `where` argument doesn't exist, create a new Entreprises with this data.
     */
    create: XOR<EntreprisesCreateInput, EntreprisesUncheckedCreateInput>
    /**
     * In case the Entreprises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntreprisesUpdateInput, EntreprisesUncheckedUpdateInput>
  }

  /**
   * Entreprises delete
   */
  export type EntreprisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    /**
     * Filter which Entreprises to delete.
     */
    where: EntreprisesWhereUniqueInput
  }

  /**
   * Entreprises deleteMany
   */
  export type EntreprisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entreprises to delete
     */
    where?: EntreprisesWhereInput
    /**
     * Limit how many Entreprises to delete.
     */
    limit?: number
  }

  /**
   * Entreprises.Utilisateurs
   */
  export type Entreprises$UtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    where?: UtilisateursWhereInput
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    cursor?: UtilisateursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Entreprises without action
   */
  export type EntreprisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
  }


  /**
   * Model Utilisateurs
   */

  export type AggregateUtilisateurs = {
    _count: UtilisateursCountAggregateOutputType | null
    _avg: UtilisateursAvgAggregateOutputType | null
    _sum: UtilisateursSumAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  export type UtilisateursAvgAggregateOutputType = {
    id: number | null
    entrepriseId: number | null
  }

  export type UtilisateursSumAggregateOutputType = {
    id: number | null
    entrepriseId: number | null
  }

  export type UtilisateursMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    login: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    entrepriseId: number | null
  }

  export type UtilisateursMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    login: string | null
    password: string | null
    email: string | null
    role: $Enums.Role | null
    entrepriseId: number | null
  }

  export type UtilisateursCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    login: number
    password: number
    email: number
    role: number
    entrepriseId: number
    _all: number
  }


  export type UtilisateursAvgAggregateInputType = {
    id?: true
    entrepriseId?: true
  }

  export type UtilisateursSumAggregateInputType = {
    id?: true
    entrepriseId?: true
  }

  export type UtilisateursMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    login?: true
    password?: true
    email?: true
    role?: true
    entrepriseId?: true
  }

  export type UtilisateursMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    login?: true
    password?: true
    email?: true
    role?: true
    entrepriseId?: true
  }

  export type UtilisateursCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    login?: true
    password?: true
    email?: true
    role?: true
    entrepriseId?: true
    _all?: true
  }

  export type UtilisateursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to aggregate.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateursAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateursSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateursMaxAggregateInputType
  }

  export type GetUtilisateursAggregateType<T extends UtilisateursAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateurs[P]>
      : GetScalarType<T[P], AggregateUtilisateurs[P]>
  }




  export type UtilisateursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateursWhereInput
    orderBy?: UtilisateursOrderByWithAggregationInput | UtilisateursOrderByWithAggregationInput[]
    by: UtilisateursScalarFieldEnum[] | UtilisateursScalarFieldEnum
    having?: UtilisateursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateursCountAggregateInputType | true
    _avg?: UtilisateursAvgAggregateInputType
    _sum?: UtilisateursSumAggregateInputType
    _min?: UtilisateursMinAggregateInputType
    _max?: UtilisateursMaxAggregateInputType
  }

  export type UtilisateursGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
    entrepriseId: number | null
    _count: UtilisateursCountAggregateOutputType | null
    _avg: UtilisateursAvgAggregateOutputType | null
    _sum: UtilisateursSumAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  type GetUtilisateursGroupByPayload<T extends UtilisateursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    login?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    entrepriseId?: boolean
    entreprises?: boolean | Utilisateurs$entreprisesArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateurs"]>



  export type UtilisateursSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    login?: boolean
    password?: boolean
    email?: boolean
    role?: boolean
    entrepriseId?: boolean
  }

  export type UtilisateursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "login" | "password" | "email" | "role" | "entrepriseId", ExtArgs["result"]["utilisateurs"]>
  export type UtilisateursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | Utilisateurs$entreprisesArgs<ExtArgs>
  }

  export type $UtilisateursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateurs"
    objects: {
      entreprises: Prisma.$EntreprisesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      login: string
      password: string
      email: string
      role: $Enums.Role
      entrepriseId: number | null
    }, ExtArgs["result"]["utilisateurs"]>
    composites: {}
  }

  type UtilisateursGetPayload<S extends boolean | null | undefined | UtilisateursDefaultArgs> = $Result.GetResult<Prisma.$UtilisateursPayload, S>

  type UtilisateursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateursCountAggregateInputType | true
    }

  export interface UtilisateursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateurs'], meta: { name: 'Utilisateurs' } }
    /**
     * Find zero or one Utilisateurs that matches the filter.
     * @param {UtilisateursFindUniqueArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateursFindUniqueArgs>(args: SelectSubset<T, UtilisateursFindUniqueArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateursFindUniqueOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateursFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursFindFirstArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateursFindFirstArgs>(args?: SelectSubset<T, UtilisateursFindFirstArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursFindFirstOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateursFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateursFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateursFindManyArgs>(args?: SelectSubset<T, UtilisateursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateurs.
     * @param {UtilisateursCreateArgs} args - Arguments to create a Utilisateurs.
     * @example
     * // Create one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.create({
     *   data: {
     *     // ... data to create a Utilisateurs
     *   }
     * })
     * 
     */
    create<T extends UtilisateursCreateArgs>(args: SelectSubset<T, UtilisateursCreateArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateursCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateursCreateManyArgs>(args?: SelectSubset<T, UtilisateursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateurs.
     * @param {UtilisateursDeleteArgs} args - Arguments to delete one Utilisateurs.
     * @example
     * // Delete one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.delete({
     *   where: {
     *     // ... filter to delete one Utilisateurs
     *   }
     * })
     * 
     */
    delete<T extends UtilisateursDeleteArgs>(args: SelectSubset<T, UtilisateursDeleteArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateurs.
     * @param {UtilisateursUpdateArgs} args - Arguments to update one Utilisateurs.
     * @example
     * // Update one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateursUpdateArgs>(args: SelectSubset<T, UtilisateursUpdateArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateursDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateursDeleteManyArgs>(args?: SelectSubset<T, UtilisateursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateursUpdateManyArgs>(args: SelectSubset<T, UtilisateursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateurs.
     * @param {UtilisateursUpsertArgs} args - Arguments to update or create a Utilisateurs.
     * @example
     * // Update or create a Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.upsert({
     *   create: {
     *     // ... data to create a Utilisateurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateurs we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateursUpsertArgs>(args: SelectSubset<T, UtilisateursUpsertArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateurs.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateursCountArgs>(
      args?: Subset<T, UtilisateursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateursAggregateArgs>(args: Subset<T, UtilisateursAggregateArgs>): Prisma.PrismaPromise<GetUtilisateursAggregateType<T>>

    /**
     * Group by Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursGroupByArgs} args - Group by arguments.
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
      T extends UtilisateursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateursGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateurs model
   */
  readonly fields: UtilisateursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprises<T extends Utilisateurs$entreprisesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateurs$entreprisesArgs<ExtArgs>>): Prisma__EntreprisesClient<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Utilisateurs model
   */
  interface UtilisateursFieldRefs {
    readonly id: FieldRef<"Utilisateurs", 'Int'>
    readonly nom: FieldRef<"Utilisateurs", 'String'>
    readonly prenom: FieldRef<"Utilisateurs", 'String'>
    readonly login: FieldRef<"Utilisateurs", 'String'>
    readonly password: FieldRef<"Utilisateurs", 'String'>
    readonly email: FieldRef<"Utilisateurs", 'String'>
    readonly role: FieldRef<"Utilisateurs", 'Role'>
    readonly entrepriseId: FieldRef<"Utilisateurs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateurs findUnique
   */
  export type UtilisateursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs findUniqueOrThrow
   */
  export type UtilisateursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs findFirst
   */
  export type UtilisateursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Utilisateurs findFirstOrThrow
   */
  export type UtilisateursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Utilisateurs findMany
   */
  export type UtilisateursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Utilisateurs create
   */
  export type UtilisateursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateurs.
     */
    data: XOR<UtilisateursCreateInput, UtilisateursUncheckedCreateInput>
  }

  /**
   * Utilisateurs createMany
   */
  export type UtilisateursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateursCreateManyInput | UtilisateursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateurs update
   */
  export type UtilisateursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateurs.
     */
    data: XOR<UtilisateursUpdateInput, UtilisateursUncheckedUpdateInput>
    /**
     * Choose, which Utilisateurs to update.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs updateMany
   */
  export type UtilisateursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateursUpdateManyMutationInput, UtilisateursUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateursWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateurs upsert
   */
  export type UtilisateursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateurs to update in case it exists.
     */
    where: UtilisateursWhereUniqueInput
    /**
     * In case the Utilisateurs found by the `where` argument doesn't exist, create a new Utilisateurs with this data.
     */
    create: XOR<UtilisateursCreateInput, UtilisateursUncheckedCreateInput>
    /**
     * In case the Utilisateurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateursUpdateInput, UtilisateursUncheckedUpdateInput>
  }

  /**
   * Utilisateurs delete
   */
  export type UtilisateursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter which Utilisateurs to delete.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs deleteMany
   */
  export type UtilisateursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateursWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateurs.entreprises
   */
  export type Utilisateurs$entreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    where?: EntreprisesWhereInput
  }

  /**
   * Utilisateurs without action
   */
  export type UtilisateursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
  }


  /**
   * Model Devises
   */

  export type AggregateDevises = {
    _count: DevisesCountAggregateOutputType | null
    _avg: DevisesAvgAggregateOutputType | null
    _sum: DevisesSumAggregateOutputType | null
    _min: DevisesMinAggregateOutputType | null
    _max: DevisesMaxAggregateOutputType | null
  }

  export type DevisesAvgAggregateOutputType = {
    id: number | null
  }

  export type DevisesSumAggregateOutputType = {
    id: number | null
  }

  export type DevisesMinAggregateOutputType = {
    id: number | null
    libelle: string | null
  }

  export type DevisesMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
  }

  export type DevisesCountAggregateOutputType = {
    id: number
    libelle: number
    _all: number
  }


  export type DevisesAvgAggregateInputType = {
    id?: true
  }

  export type DevisesSumAggregateInputType = {
    id?: true
  }

  export type DevisesMinAggregateInputType = {
    id?: true
    libelle?: true
  }

  export type DevisesMaxAggregateInputType = {
    id?: true
    libelle?: true
  }

  export type DevisesCountAggregateInputType = {
    id?: true
    libelle?: true
    _all?: true
  }

  export type DevisesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devises to aggregate.
     */
    where?: DevisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devises to fetch.
     */
    orderBy?: DevisesOrderByWithRelationInput | DevisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DevisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devises
    **/
    _count?: true | DevisesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DevisesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DevisesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DevisesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DevisesMaxAggregateInputType
  }

  export type GetDevisesAggregateType<T extends DevisesAggregateArgs> = {
        [P in keyof T & keyof AggregateDevises]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevises[P]>
      : GetScalarType<T[P], AggregateDevises[P]>
  }




  export type DevisesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DevisesWhereInput
    orderBy?: DevisesOrderByWithAggregationInput | DevisesOrderByWithAggregationInput[]
    by: DevisesScalarFieldEnum[] | DevisesScalarFieldEnum
    having?: DevisesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DevisesCountAggregateInputType | true
    _avg?: DevisesAvgAggregateInputType
    _sum?: DevisesSumAggregateInputType
    _min?: DevisesMinAggregateInputType
    _max?: DevisesMaxAggregateInputType
  }

  export type DevisesGroupByOutputType = {
    id: number
    libelle: string
    _count: DevisesCountAggregateOutputType | null
    _avg: DevisesAvgAggregateOutputType | null
    _sum: DevisesSumAggregateOutputType | null
    _min: DevisesMinAggregateOutputType | null
    _max: DevisesMaxAggregateOutputType | null
  }

  type GetDevisesGroupByPayload<T extends DevisesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DevisesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DevisesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DevisesGroupByOutputType[P]>
            : GetScalarType<T[P], DevisesGroupByOutputType[P]>
        }
      >
    >


  export type DevisesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    entreprises?: boolean | Devises$entreprisesArgs<ExtArgs>
    _count?: boolean | DevisesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["devises"]>



  export type DevisesSelectScalar = {
    id?: boolean
    libelle?: boolean
  }

  export type DevisesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle", ExtArgs["result"]["devises"]>
  export type DevisesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entreprises?: boolean | Devises$entreprisesArgs<ExtArgs>
    _count?: boolean | DevisesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DevisesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Devises"
    objects: {
      entreprises: Prisma.$EntreprisesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
    }, ExtArgs["result"]["devises"]>
    composites: {}
  }

  type DevisesGetPayload<S extends boolean | null | undefined | DevisesDefaultArgs> = $Result.GetResult<Prisma.$DevisesPayload, S>

  type DevisesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DevisesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DevisesCountAggregateInputType | true
    }

  export interface DevisesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Devises'], meta: { name: 'Devises' } }
    /**
     * Find zero or one Devises that matches the filter.
     * @param {DevisesFindUniqueArgs} args - Arguments to find a Devises
     * @example
     * // Get one Devises
     * const devises = await prisma.devises.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DevisesFindUniqueArgs>(args: SelectSubset<T, DevisesFindUniqueArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Devises that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DevisesFindUniqueOrThrowArgs} args - Arguments to find a Devises
     * @example
     * // Get one Devises
     * const devises = await prisma.devises.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DevisesFindUniqueOrThrowArgs>(args: SelectSubset<T, DevisesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesFindFirstArgs} args - Arguments to find a Devises
     * @example
     * // Get one Devises
     * const devises = await prisma.devises.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DevisesFindFirstArgs>(args?: SelectSubset<T, DevisesFindFirstArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Devises that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesFindFirstOrThrowArgs} args - Arguments to find a Devises
     * @example
     * // Get one Devises
     * const devises = await prisma.devises.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DevisesFindFirstOrThrowArgs>(args?: SelectSubset<T, DevisesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devises
     * const devises = await prisma.devises.findMany()
     * 
     * // Get first 10 Devises
     * const devises = await prisma.devises.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const devisesWithIdOnly = await prisma.devises.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DevisesFindManyArgs>(args?: SelectSubset<T, DevisesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Devises.
     * @param {DevisesCreateArgs} args - Arguments to create a Devises.
     * @example
     * // Create one Devises
     * const Devises = await prisma.devises.create({
     *   data: {
     *     // ... data to create a Devises
     *   }
     * })
     * 
     */
    create<T extends DevisesCreateArgs>(args: SelectSubset<T, DevisesCreateArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devises.
     * @param {DevisesCreateManyArgs} args - Arguments to create many Devises.
     * @example
     * // Create many Devises
     * const devises = await prisma.devises.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DevisesCreateManyArgs>(args?: SelectSubset<T, DevisesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Devises.
     * @param {DevisesDeleteArgs} args - Arguments to delete one Devises.
     * @example
     * // Delete one Devises
     * const Devises = await prisma.devises.delete({
     *   where: {
     *     // ... filter to delete one Devises
     *   }
     * })
     * 
     */
    delete<T extends DevisesDeleteArgs>(args: SelectSubset<T, DevisesDeleteArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Devises.
     * @param {DevisesUpdateArgs} args - Arguments to update one Devises.
     * @example
     * // Update one Devises
     * const devises = await prisma.devises.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DevisesUpdateArgs>(args: SelectSubset<T, DevisesUpdateArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devises.
     * @param {DevisesDeleteManyArgs} args - Arguments to filter Devises to delete.
     * @example
     * // Delete a few Devises
     * const { count } = await prisma.devises.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DevisesDeleteManyArgs>(args?: SelectSubset<T, DevisesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devises
     * const devises = await prisma.devises.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DevisesUpdateManyArgs>(args: SelectSubset<T, DevisesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Devises.
     * @param {DevisesUpsertArgs} args - Arguments to update or create a Devises.
     * @example
     * // Update or create a Devises
     * const devises = await prisma.devises.upsert({
     *   create: {
     *     // ... data to create a Devises
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Devises we want to update
     *   }
     * })
     */
    upsert<T extends DevisesUpsertArgs>(args: SelectSubset<T, DevisesUpsertArgs<ExtArgs>>): Prisma__DevisesClient<$Result.GetResult<Prisma.$DevisesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesCountArgs} args - Arguments to filter Devises to count.
     * @example
     * // Count the number of Devises
     * const count = await prisma.devises.count({
     *   where: {
     *     // ... the filter for the Devises we want to count
     *   }
     * })
    **/
    count<T extends DevisesCountArgs>(
      args?: Subset<T, DevisesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DevisesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Devises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DevisesAggregateArgs>(args: Subset<T, DevisesAggregateArgs>): Prisma.PrismaPromise<GetDevisesAggregateType<T>>

    /**
     * Group by Devises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DevisesGroupByArgs} args - Group by arguments.
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
      T extends DevisesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DevisesGroupByArgs['orderBy'] }
        : { orderBy?: DevisesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DevisesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevisesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Devises model
   */
  readonly fields: DevisesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Devises.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DevisesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entreprises<T extends Devises$entreprisesArgs<ExtArgs> = {}>(args?: Subset<T, Devises$entreprisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntreprisesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Devises model
   */
  interface DevisesFieldRefs {
    readonly id: FieldRef<"Devises", 'Int'>
    readonly libelle: FieldRef<"Devises", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Devises findUnique
   */
  export type DevisesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * Filter, which Devises to fetch.
     */
    where: DevisesWhereUniqueInput
  }

  /**
   * Devises findUniqueOrThrow
   */
  export type DevisesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * Filter, which Devises to fetch.
     */
    where: DevisesWhereUniqueInput
  }

  /**
   * Devises findFirst
   */
  export type DevisesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * Filter, which Devises to fetch.
     */
    where?: DevisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devises to fetch.
     */
    orderBy?: DevisesOrderByWithRelationInput | DevisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devises.
     */
    cursor?: DevisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devises.
     */
    distinct?: DevisesScalarFieldEnum | DevisesScalarFieldEnum[]
  }

  /**
   * Devises findFirstOrThrow
   */
  export type DevisesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * Filter, which Devises to fetch.
     */
    where?: DevisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devises to fetch.
     */
    orderBy?: DevisesOrderByWithRelationInput | DevisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devises.
     */
    cursor?: DevisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devises.
     */
    distinct?: DevisesScalarFieldEnum | DevisesScalarFieldEnum[]
  }

  /**
   * Devises findMany
   */
  export type DevisesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * Filter, which Devises to fetch.
     */
    where?: DevisesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devises to fetch.
     */
    orderBy?: DevisesOrderByWithRelationInput | DevisesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devises.
     */
    cursor?: DevisesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devises.
     */
    skip?: number
    distinct?: DevisesScalarFieldEnum | DevisesScalarFieldEnum[]
  }

  /**
   * Devises create
   */
  export type DevisesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * The data needed to create a Devises.
     */
    data: XOR<DevisesCreateInput, DevisesUncheckedCreateInput>
  }

  /**
   * Devises createMany
   */
  export type DevisesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devises.
     */
    data: DevisesCreateManyInput | DevisesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Devises update
   */
  export type DevisesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * The data needed to update a Devises.
     */
    data: XOR<DevisesUpdateInput, DevisesUncheckedUpdateInput>
    /**
     * Choose, which Devises to update.
     */
    where: DevisesWhereUniqueInput
  }

  /**
   * Devises updateMany
   */
  export type DevisesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devises.
     */
    data: XOR<DevisesUpdateManyMutationInput, DevisesUncheckedUpdateManyInput>
    /**
     * Filter which Devises to update
     */
    where?: DevisesWhereInput
    /**
     * Limit how many Devises to update.
     */
    limit?: number
  }

  /**
   * Devises upsert
   */
  export type DevisesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * The filter to search for the Devises to update in case it exists.
     */
    where: DevisesWhereUniqueInput
    /**
     * In case the Devises found by the `where` argument doesn't exist, create a new Devises with this data.
     */
    create: XOR<DevisesCreateInput, DevisesUncheckedCreateInput>
    /**
     * In case the Devises was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DevisesUpdateInput, DevisesUncheckedUpdateInput>
  }

  /**
   * Devises delete
   */
  export type DevisesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
    /**
     * Filter which Devises to delete.
     */
    where: DevisesWhereUniqueInput
  }

  /**
   * Devises deleteMany
   */
  export type DevisesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devises to delete
     */
    where?: DevisesWhereInput
    /**
     * Limit how many Devises to delete.
     */
    limit?: number
  }

  /**
   * Devises.entreprises
   */
  export type Devises$entreprisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entreprises
     */
    select?: EntreprisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entreprises
     */
    omit?: EntreprisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntreprisesInclude<ExtArgs> | null
    where?: EntreprisesWhereInput
    orderBy?: EntreprisesOrderByWithRelationInput | EntreprisesOrderByWithRelationInput[]
    cursor?: EntreprisesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntreprisesScalarFieldEnum | EntreprisesScalarFieldEnum[]
  }

  /**
   * Devises without action
   */
  export type DevisesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Devises
     */
    select?: DevisesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Devises
     */
    omit?: DevisesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DevisesInclude<ExtArgs> | null
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


  export const EntreprisesScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    telephone: 'telephone',
    dbKey: 'dbKey',
    Statut: 'Statut',
    date_creation: 'date_creation',
    deviseId: 'deviseId'
  };

  export type EntreprisesScalarFieldEnum = (typeof EntreprisesScalarFieldEnum)[keyof typeof EntreprisesScalarFieldEnum]


  export const UtilisateursScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    login: 'login',
    password: 'password',
    email: 'email',
    role: 'role',
    entrepriseId: 'entrepriseId'
  };

  export type UtilisateursScalarFieldEnum = (typeof UtilisateursScalarFieldEnum)[keyof typeof UtilisateursScalarFieldEnum]


  export const DevisesScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle'
  };

  export type DevisesScalarFieldEnum = (typeof DevisesScalarFieldEnum)[keyof typeof DevisesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const EntreprisesOrderByRelevanceFieldEnum: {
    nom: 'nom',
    email: 'email',
    telephone: 'telephone',
    dbKey: 'dbKey'
  };

  export type EntreprisesOrderByRelevanceFieldEnum = (typeof EntreprisesOrderByRelevanceFieldEnum)[keyof typeof EntreprisesOrderByRelevanceFieldEnum]


  export const UtilisateursOrderByRelevanceFieldEnum: {
    nom: 'nom',
    prenom: 'prenom',
    login: 'login',
    password: 'password',
    email: 'email'
  };

  export type UtilisateursOrderByRelevanceFieldEnum = (typeof UtilisateursOrderByRelevanceFieldEnum)[keyof typeof UtilisateursOrderByRelevanceFieldEnum]


  export const DevisesOrderByRelevanceFieldEnum: {
    libelle: 'libelle'
  };

  export type DevisesOrderByRelevanceFieldEnum = (typeof DevisesOrderByRelevanceFieldEnum)[keyof typeof DevisesOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Statut'
   */
  export type EnumStatutFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Statut'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EntreprisesWhereInput = {
    AND?: EntreprisesWhereInput | EntreprisesWhereInput[]
    OR?: EntreprisesWhereInput[]
    NOT?: EntreprisesWhereInput | EntreprisesWhereInput[]
    id?: IntFilter<"Entreprises"> | number
    nom?: StringFilter<"Entreprises"> | string
    email?: StringFilter<"Entreprises"> | string
    telephone?: StringFilter<"Entreprises"> | string
    dbKey?: StringFilter<"Entreprises"> | string
    Statut?: EnumStatutFilter<"Entreprises"> | $Enums.Statut
    date_creation?: DateTimeNullableFilter<"Entreprises"> | Date | string | null
    deviseId?: IntFilter<"Entreprises"> | number
    devises?: XOR<DevisesScalarRelationFilter, DevisesWhereInput>
    Utilisateurs?: UtilisateursListRelationFilter
  }

  export type EntreprisesOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    dbKey?: SortOrder
    Statut?: SortOrder
    date_creation?: SortOrderInput | SortOrder
    deviseId?: SortOrder
    devises?: DevisesOrderByWithRelationInput
    Utilisateurs?: UtilisateursOrderByRelationAggregateInput
    _relevance?: EntreprisesOrderByRelevanceInput
  }

  export type EntreprisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telephone?: string
    AND?: EntreprisesWhereInput | EntreprisesWhereInput[]
    OR?: EntreprisesWhereInput[]
    NOT?: EntreprisesWhereInput | EntreprisesWhereInput[]
    nom?: StringFilter<"Entreprises"> | string
    dbKey?: StringFilter<"Entreprises"> | string
    Statut?: EnumStatutFilter<"Entreprises"> | $Enums.Statut
    date_creation?: DateTimeNullableFilter<"Entreprises"> | Date | string | null
    deviseId?: IntFilter<"Entreprises"> | number
    devises?: XOR<DevisesScalarRelationFilter, DevisesWhereInput>
    Utilisateurs?: UtilisateursListRelationFilter
  }, "id" | "email" | "telephone">

  export type EntreprisesOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    dbKey?: SortOrder
    Statut?: SortOrder
    date_creation?: SortOrderInput | SortOrder
    deviseId?: SortOrder
    _count?: EntreprisesCountOrderByAggregateInput
    _avg?: EntreprisesAvgOrderByAggregateInput
    _max?: EntreprisesMaxOrderByAggregateInput
    _min?: EntreprisesMinOrderByAggregateInput
    _sum?: EntreprisesSumOrderByAggregateInput
  }

  export type EntreprisesScalarWhereWithAggregatesInput = {
    AND?: EntreprisesScalarWhereWithAggregatesInput | EntreprisesScalarWhereWithAggregatesInput[]
    OR?: EntreprisesScalarWhereWithAggregatesInput[]
    NOT?: EntreprisesScalarWhereWithAggregatesInput | EntreprisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entreprises"> | number
    nom?: StringWithAggregatesFilter<"Entreprises"> | string
    email?: StringWithAggregatesFilter<"Entreprises"> | string
    telephone?: StringWithAggregatesFilter<"Entreprises"> | string
    dbKey?: StringWithAggregatesFilter<"Entreprises"> | string
    Statut?: EnumStatutWithAggregatesFilter<"Entreprises"> | $Enums.Statut
    date_creation?: DateTimeNullableWithAggregatesFilter<"Entreprises"> | Date | string | null
    deviseId?: IntWithAggregatesFilter<"Entreprises"> | number
  }

  export type UtilisateursWhereInput = {
    AND?: UtilisateursWhereInput | UtilisateursWhereInput[]
    OR?: UtilisateursWhereInput[]
    NOT?: UtilisateursWhereInput | UtilisateursWhereInput[]
    id?: IntFilter<"Utilisateurs"> | number
    nom?: StringFilter<"Utilisateurs"> | string
    prenom?: StringFilter<"Utilisateurs"> | string
    login?: StringFilter<"Utilisateurs"> | string
    password?: StringFilter<"Utilisateurs"> | string
    email?: StringFilter<"Utilisateurs"> | string
    role?: EnumRoleFilter<"Utilisateurs"> | $Enums.Role
    entrepriseId?: IntNullableFilter<"Utilisateurs"> | number | null
    entreprises?: XOR<EntreprisesNullableScalarRelationFilter, EntreprisesWhereInput> | null
  }

  export type UtilisateursOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    entreprises?: EntreprisesOrderByWithRelationInput
    _relevance?: UtilisateursOrderByRelevanceInput
  }

  export type UtilisateursWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    login?: string
    email?: string
    AND?: UtilisateursWhereInput | UtilisateursWhereInput[]
    OR?: UtilisateursWhereInput[]
    NOT?: UtilisateursWhereInput | UtilisateursWhereInput[]
    nom?: StringFilter<"Utilisateurs"> | string
    prenom?: StringFilter<"Utilisateurs"> | string
    password?: StringFilter<"Utilisateurs"> | string
    role?: EnumRoleFilter<"Utilisateurs"> | $Enums.Role
    entrepriseId?: IntNullableFilter<"Utilisateurs"> | number | null
    entreprises?: XOR<EntreprisesNullableScalarRelationFilter, EntreprisesWhereInput> | null
  }, "id" | "login" | "email">

  export type UtilisateursOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrderInput | SortOrder
    _count?: UtilisateursCountOrderByAggregateInput
    _avg?: UtilisateursAvgOrderByAggregateInput
    _max?: UtilisateursMaxOrderByAggregateInput
    _min?: UtilisateursMinOrderByAggregateInput
    _sum?: UtilisateursSumOrderByAggregateInput
  }

  export type UtilisateursScalarWhereWithAggregatesInput = {
    AND?: UtilisateursScalarWhereWithAggregatesInput | UtilisateursScalarWhereWithAggregatesInput[]
    OR?: UtilisateursScalarWhereWithAggregatesInput[]
    NOT?: UtilisateursScalarWhereWithAggregatesInput | UtilisateursScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateurs"> | number
    nom?: StringWithAggregatesFilter<"Utilisateurs"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateurs"> | string
    login?: StringWithAggregatesFilter<"Utilisateurs"> | string
    password?: StringWithAggregatesFilter<"Utilisateurs"> | string
    email?: StringWithAggregatesFilter<"Utilisateurs"> | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateurs"> | $Enums.Role
    entrepriseId?: IntNullableWithAggregatesFilter<"Utilisateurs"> | number | null
  }

  export type DevisesWhereInput = {
    AND?: DevisesWhereInput | DevisesWhereInput[]
    OR?: DevisesWhereInput[]
    NOT?: DevisesWhereInput | DevisesWhereInput[]
    id?: IntFilter<"Devises"> | number
    libelle?: StringFilter<"Devises"> | string
    entreprises?: EntreprisesListRelationFilter
  }

  export type DevisesOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    entreprises?: EntreprisesOrderByRelationAggregateInput
    _relevance?: DevisesOrderByRelevanceInput
  }

  export type DevisesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    libelle?: string
    AND?: DevisesWhereInput | DevisesWhereInput[]
    OR?: DevisesWhereInput[]
    NOT?: DevisesWhereInput | DevisesWhereInput[]
    entreprises?: EntreprisesListRelationFilter
  }, "id" | "libelle">

  export type DevisesOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    _count?: DevisesCountOrderByAggregateInput
    _avg?: DevisesAvgOrderByAggregateInput
    _max?: DevisesMaxOrderByAggregateInput
    _min?: DevisesMinOrderByAggregateInput
    _sum?: DevisesSumOrderByAggregateInput
  }

  export type DevisesScalarWhereWithAggregatesInput = {
    AND?: DevisesScalarWhereWithAggregatesInput | DevisesScalarWhereWithAggregatesInput[]
    OR?: DevisesScalarWhereWithAggregatesInput[]
    NOT?: DevisesScalarWhereWithAggregatesInput | DevisesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Devises"> | number
    libelle?: StringWithAggregatesFilter<"Devises"> | string
  }

  export type EntreprisesCreateInput = {
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    devises: DevisesCreateNestedOneWithoutEntreprisesInput
    Utilisateurs?: UtilisateursCreateNestedManyWithoutEntreprisesInput
  }

  export type EntreprisesUncheckedCreateInput = {
    id?: number
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    deviseId: number
    Utilisateurs?: UtilisateursUncheckedCreateNestedManyWithoutEntreprisesInput
  }

  export type EntreprisesUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devises?: DevisesUpdateOneRequiredWithoutEntreprisesNestedInput
    Utilisateurs?: UtilisateursUpdateManyWithoutEntreprisesNestedInput
  }

  export type EntreprisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviseId?: IntFieldUpdateOperationsInput | number
    Utilisateurs?: UtilisateursUncheckedUpdateManyWithoutEntreprisesNestedInput
  }

  export type EntreprisesCreateManyInput = {
    id?: number
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    deviseId: number
  }

  export type EntreprisesUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EntreprisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviseId?: IntFieldUpdateOperationsInput | number
  }

  export type UtilisateursCreateInput = {
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
    entreprises?: EntreprisesCreateNestedOneWithoutUtilisateursInput
  }

  export type UtilisateursUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
    entrepriseId?: number | null
  }

  export type UtilisateursUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    entreprises?: EntreprisesUpdateOneWithoutUtilisateursNestedInput
  }

  export type UtilisateursUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    entrepriseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UtilisateursCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
    entrepriseId?: number | null
  }

  export type UtilisateursUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UtilisateursUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    entrepriseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DevisesCreateInput = {
    libelle: string
    entreprises?: EntreprisesCreateNestedManyWithoutDevisesInput
  }

  export type DevisesUncheckedCreateInput = {
    id?: number
    libelle: string
    entreprises?: EntreprisesUncheckedCreateNestedManyWithoutDevisesInput
  }

  export type DevisesUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    entreprises?: EntreprisesUpdateManyWithoutDevisesNestedInput
  }

  export type DevisesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    entreprises?: EntreprisesUncheckedUpdateManyWithoutDevisesNestedInput
  }

  export type DevisesCreateManyInput = {
    id?: number
    libelle: string
  }

  export type DevisesUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type DevisesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
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

  export type EnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
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

  export type DevisesScalarRelationFilter = {
    is?: DevisesWhereInput
    isNot?: DevisesWhereInput
  }

  export type UtilisateursListRelationFilter = {
    every?: UtilisateursWhereInput
    some?: UtilisateursWhereInput
    none?: UtilisateursWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UtilisateursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntreprisesOrderByRelevanceInput = {
    fields: EntreprisesOrderByRelevanceFieldEnum | EntreprisesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EntreprisesCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    dbKey?: SortOrder
    Statut?: SortOrder
    date_creation?: SortOrder
    deviseId?: SortOrder
  }

  export type EntreprisesAvgOrderByAggregateInput = {
    id?: SortOrder
    deviseId?: SortOrder
  }

  export type EntreprisesMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    dbKey?: SortOrder
    Statut?: SortOrder
    date_creation?: SortOrder
    deviseId?: SortOrder
  }

  export type EntreprisesMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    dbKey?: SortOrder
    Statut?: SortOrder
    date_creation?: SortOrder
    deviseId?: SortOrder
  }

  export type EntreprisesSumOrderByAggregateInput = {
    id?: SortOrder
    deviseId?: SortOrder
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

  export type EnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EntreprisesNullableScalarRelationFilter = {
    is?: EntreprisesWhereInput | null
    isNot?: EntreprisesWhereInput | null
  }

  export type UtilisateursOrderByRelevanceInput = {
    fields: UtilisateursOrderByRelevanceFieldEnum | UtilisateursOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UtilisateursCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrder
  }

  export type UtilisateursAvgOrderByAggregateInput = {
    id?: SortOrder
    entrepriseId?: SortOrder
  }

  export type UtilisateursMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrder
  }

  export type UtilisateursMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    login?: SortOrder
    password?: SortOrder
    email?: SortOrder
    role?: SortOrder
    entrepriseId?: SortOrder
  }

  export type UtilisateursSumOrderByAggregateInput = {
    id?: SortOrder
    entrepriseId?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EntreprisesListRelationFilter = {
    every?: EntreprisesWhereInput
    some?: EntreprisesWhereInput
    none?: EntreprisesWhereInput
  }

  export type EntreprisesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DevisesOrderByRelevanceInput = {
    fields: DevisesOrderByRelevanceFieldEnum | DevisesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DevisesCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
  }

  export type DevisesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DevisesMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
  }

  export type DevisesMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
  }

  export type DevisesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DevisesCreateNestedOneWithoutEntreprisesInput = {
    create?: XOR<DevisesCreateWithoutEntreprisesInput, DevisesUncheckedCreateWithoutEntreprisesInput>
    connectOrCreate?: DevisesCreateOrConnectWithoutEntreprisesInput
    connect?: DevisesWhereUniqueInput
  }

  export type UtilisateursCreateNestedManyWithoutEntreprisesInput = {
    create?: XOR<UtilisateursCreateWithoutEntreprisesInput, UtilisateursUncheckedCreateWithoutEntreprisesInput> | UtilisateursCreateWithoutEntreprisesInput[] | UtilisateursUncheckedCreateWithoutEntreprisesInput[]
    connectOrCreate?: UtilisateursCreateOrConnectWithoutEntreprisesInput | UtilisateursCreateOrConnectWithoutEntreprisesInput[]
    createMany?: UtilisateursCreateManyEntreprisesInputEnvelope
    connect?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
  }

  export type UtilisateursUncheckedCreateNestedManyWithoutEntreprisesInput = {
    create?: XOR<UtilisateursCreateWithoutEntreprisesInput, UtilisateursUncheckedCreateWithoutEntreprisesInput> | UtilisateursCreateWithoutEntreprisesInput[] | UtilisateursUncheckedCreateWithoutEntreprisesInput[]
    connectOrCreate?: UtilisateursCreateOrConnectWithoutEntreprisesInput | UtilisateursCreateOrConnectWithoutEntreprisesInput[]
    createMany?: UtilisateursCreateManyEntreprisesInputEnvelope
    connect?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatutFieldUpdateOperationsInput = {
    set?: $Enums.Statut
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DevisesUpdateOneRequiredWithoutEntreprisesNestedInput = {
    create?: XOR<DevisesCreateWithoutEntreprisesInput, DevisesUncheckedCreateWithoutEntreprisesInput>
    connectOrCreate?: DevisesCreateOrConnectWithoutEntreprisesInput
    upsert?: DevisesUpsertWithoutEntreprisesInput
    connect?: DevisesWhereUniqueInput
    update?: XOR<XOR<DevisesUpdateToOneWithWhereWithoutEntreprisesInput, DevisesUpdateWithoutEntreprisesInput>, DevisesUncheckedUpdateWithoutEntreprisesInput>
  }

  export type UtilisateursUpdateManyWithoutEntreprisesNestedInput = {
    create?: XOR<UtilisateursCreateWithoutEntreprisesInput, UtilisateursUncheckedCreateWithoutEntreprisesInput> | UtilisateursCreateWithoutEntreprisesInput[] | UtilisateursUncheckedCreateWithoutEntreprisesInput[]
    connectOrCreate?: UtilisateursCreateOrConnectWithoutEntreprisesInput | UtilisateursCreateOrConnectWithoutEntreprisesInput[]
    upsert?: UtilisateursUpsertWithWhereUniqueWithoutEntreprisesInput | UtilisateursUpsertWithWhereUniqueWithoutEntreprisesInput[]
    createMany?: UtilisateursCreateManyEntreprisesInputEnvelope
    set?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    disconnect?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    delete?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    connect?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    update?: UtilisateursUpdateWithWhereUniqueWithoutEntreprisesInput | UtilisateursUpdateWithWhereUniqueWithoutEntreprisesInput[]
    updateMany?: UtilisateursUpdateManyWithWhereWithoutEntreprisesInput | UtilisateursUpdateManyWithWhereWithoutEntreprisesInput[]
    deleteMany?: UtilisateursScalarWhereInput | UtilisateursScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UtilisateursUncheckedUpdateManyWithoutEntreprisesNestedInput = {
    create?: XOR<UtilisateursCreateWithoutEntreprisesInput, UtilisateursUncheckedCreateWithoutEntreprisesInput> | UtilisateursCreateWithoutEntreprisesInput[] | UtilisateursUncheckedCreateWithoutEntreprisesInput[]
    connectOrCreate?: UtilisateursCreateOrConnectWithoutEntreprisesInput | UtilisateursCreateOrConnectWithoutEntreprisesInput[]
    upsert?: UtilisateursUpsertWithWhereUniqueWithoutEntreprisesInput | UtilisateursUpsertWithWhereUniqueWithoutEntreprisesInput[]
    createMany?: UtilisateursCreateManyEntreprisesInputEnvelope
    set?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    disconnect?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    delete?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    connect?: UtilisateursWhereUniqueInput | UtilisateursWhereUniqueInput[]
    update?: UtilisateursUpdateWithWhereUniqueWithoutEntreprisesInput | UtilisateursUpdateWithWhereUniqueWithoutEntreprisesInput[]
    updateMany?: UtilisateursUpdateManyWithWhereWithoutEntreprisesInput | UtilisateursUpdateManyWithWhereWithoutEntreprisesInput[]
    deleteMany?: UtilisateursScalarWhereInput | UtilisateursScalarWhereInput[]
  }

  export type EntreprisesCreateNestedOneWithoutUtilisateursInput = {
    create?: XOR<EntreprisesCreateWithoutUtilisateursInput, EntreprisesUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: EntreprisesCreateOrConnectWithoutUtilisateursInput
    connect?: EntreprisesWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EntreprisesUpdateOneWithoutUtilisateursNestedInput = {
    create?: XOR<EntreprisesCreateWithoutUtilisateursInput, EntreprisesUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: EntreprisesCreateOrConnectWithoutUtilisateursInput
    upsert?: EntreprisesUpsertWithoutUtilisateursInput
    disconnect?: EntreprisesWhereInput | boolean
    delete?: EntreprisesWhereInput | boolean
    connect?: EntreprisesWhereUniqueInput
    update?: XOR<XOR<EntreprisesUpdateToOneWithWhereWithoutUtilisateursInput, EntreprisesUpdateWithoutUtilisateursInput>, EntreprisesUncheckedUpdateWithoutUtilisateursInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EntreprisesCreateNestedManyWithoutDevisesInput = {
    create?: XOR<EntreprisesCreateWithoutDevisesInput, EntreprisesUncheckedCreateWithoutDevisesInput> | EntreprisesCreateWithoutDevisesInput[] | EntreprisesUncheckedCreateWithoutDevisesInput[]
    connectOrCreate?: EntreprisesCreateOrConnectWithoutDevisesInput | EntreprisesCreateOrConnectWithoutDevisesInput[]
    createMany?: EntreprisesCreateManyDevisesInputEnvelope
    connect?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
  }

  export type EntreprisesUncheckedCreateNestedManyWithoutDevisesInput = {
    create?: XOR<EntreprisesCreateWithoutDevisesInput, EntreprisesUncheckedCreateWithoutDevisesInput> | EntreprisesCreateWithoutDevisesInput[] | EntreprisesUncheckedCreateWithoutDevisesInput[]
    connectOrCreate?: EntreprisesCreateOrConnectWithoutDevisesInput | EntreprisesCreateOrConnectWithoutDevisesInput[]
    createMany?: EntreprisesCreateManyDevisesInputEnvelope
    connect?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
  }

  export type EntreprisesUpdateManyWithoutDevisesNestedInput = {
    create?: XOR<EntreprisesCreateWithoutDevisesInput, EntreprisesUncheckedCreateWithoutDevisesInput> | EntreprisesCreateWithoutDevisesInput[] | EntreprisesUncheckedCreateWithoutDevisesInput[]
    connectOrCreate?: EntreprisesCreateOrConnectWithoutDevisesInput | EntreprisesCreateOrConnectWithoutDevisesInput[]
    upsert?: EntreprisesUpsertWithWhereUniqueWithoutDevisesInput | EntreprisesUpsertWithWhereUniqueWithoutDevisesInput[]
    createMany?: EntreprisesCreateManyDevisesInputEnvelope
    set?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    disconnect?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    delete?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    connect?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    update?: EntreprisesUpdateWithWhereUniqueWithoutDevisesInput | EntreprisesUpdateWithWhereUniqueWithoutDevisesInput[]
    updateMany?: EntreprisesUpdateManyWithWhereWithoutDevisesInput | EntreprisesUpdateManyWithWhereWithoutDevisesInput[]
    deleteMany?: EntreprisesScalarWhereInput | EntreprisesScalarWhereInput[]
  }

  export type EntreprisesUncheckedUpdateManyWithoutDevisesNestedInput = {
    create?: XOR<EntreprisesCreateWithoutDevisesInput, EntreprisesUncheckedCreateWithoutDevisesInput> | EntreprisesCreateWithoutDevisesInput[] | EntreprisesUncheckedCreateWithoutDevisesInput[]
    connectOrCreate?: EntreprisesCreateOrConnectWithoutDevisesInput | EntreprisesCreateOrConnectWithoutDevisesInput[]
    upsert?: EntreprisesUpsertWithWhereUniqueWithoutDevisesInput | EntreprisesUpsertWithWhereUniqueWithoutDevisesInput[]
    createMany?: EntreprisesCreateManyDevisesInputEnvelope
    set?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    disconnect?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    delete?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    connect?: EntreprisesWhereUniqueInput | EntreprisesWhereUniqueInput[]
    update?: EntreprisesUpdateWithWhereUniqueWithoutDevisesInput | EntreprisesUpdateWithWhereUniqueWithoutDevisesInput[]
    updateMany?: EntreprisesUpdateManyWithWhereWithoutDevisesInput | EntreprisesUpdateManyWithWhereWithoutDevisesInput[]
    deleteMany?: EntreprisesScalarWhereInput | EntreprisesScalarWhereInput[]
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

  export type NestedEnumStatutFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutFilter<$PrismaModel> | $Enums.Statut
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

  export type NestedEnumStatutWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Statut | EnumStatutFieldRefInput<$PrismaModel>
    in?: $Enums.Statut[]
    notIn?: $Enums.Statut[]
    not?: NestedEnumStatutWithAggregatesFilter<$PrismaModel> | $Enums.Statut
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutFilter<$PrismaModel>
    _max?: NestedEnumStatutFilter<$PrismaModel>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DevisesCreateWithoutEntreprisesInput = {
    libelle: string
  }

  export type DevisesUncheckedCreateWithoutEntreprisesInput = {
    id?: number
    libelle: string
  }

  export type DevisesCreateOrConnectWithoutEntreprisesInput = {
    where: DevisesWhereUniqueInput
    create: XOR<DevisesCreateWithoutEntreprisesInput, DevisesUncheckedCreateWithoutEntreprisesInput>
  }

  export type UtilisateursCreateWithoutEntreprisesInput = {
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
  }

  export type UtilisateursUncheckedCreateWithoutEntreprisesInput = {
    id?: number
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
  }

  export type UtilisateursCreateOrConnectWithoutEntreprisesInput = {
    where: UtilisateursWhereUniqueInput
    create: XOR<UtilisateursCreateWithoutEntreprisesInput, UtilisateursUncheckedCreateWithoutEntreprisesInput>
  }

  export type UtilisateursCreateManyEntreprisesInputEnvelope = {
    data: UtilisateursCreateManyEntreprisesInput | UtilisateursCreateManyEntreprisesInput[]
    skipDuplicates?: boolean
  }

  export type DevisesUpsertWithoutEntreprisesInput = {
    update: XOR<DevisesUpdateWithoutEntreprisesInput, DevisesUncheckedUpdateWithoutEntreprisesInput>
    create: XOR<DevisesCreateWithoutEntreprisesInput, DevisesUncheckedCreateWithoutEntreprisesInput>
    where?: DevisesWhereInput
  }

  export type DevisesUpdateToOneWithWhereWithoutEntreprisesInput = {
    where?: DevisesWhereInput
    data: XOR<DevisesUpdateWithoutEntreprisesInput, DevisesUncheckedUpdateWithoutEntreprisesInput>
  }

  export type DevisesUpdateWithoutEntreprisesInput = {
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type DevisesUncheckedUpdateWithoutEntreprisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateursUpsertWithWhereUniqueWithoutEntreprisesInput = {
    where: UtilisateursWhereUniqueInput
    update: XOR<UtilisateursUpdateWithoutEntreprisesInput, UtilisateursUncheckedUpdateWithoutEntreprisesInput>
    create: XOR<UtilisateursCreateWithoutEntreprisesInput, UtilisateursUncheckedCreateWithoutEntreprisesInput>
  }

  export type UtilisateursUpdateWithWhereUniqueWithoutEntreprisesInput = {
    where: UtilisateursWhereUniqueInput
    data: XOR<UtilisateursUpdateWithoutEntreprisesInput, UtilisateursUncheckedUpdateWithoutEntreprisesInput>
  }

  export type UtilisateursUpdateManyWithWhereWithoutEntreprisesInput = {
    where: UtilisateursScalarWhereInput
    data: XOR<UtilisateursUpdateManyMutationInput, UtilisateursUncheckedUpdateManyWithoutEntreprisesInput>
  }

  export type UtilisateursScalarWhereInput = {
    AND?: UtilisateursScalarWhereInput | UtilisateursScalarWhereInput[]
    OR?: UtilisateursScalarWhereInput[]
    NOT?: UtilisateursScalarWhereInput | UtilisateursScalarWhereInput[]
    id?: IntFilter<"Utilisateurs"> | number
    nom?: StringFilter<"Utilisateurs"> | string
    prenom?: StringFilter<"Utilisateurs"> | string
    login?: StringFilter<"Utilisateurs"> | string
    password?: StringFilter<"Utilisateurs"> | string
    email?: StringFilter<"Utilisateurs"> | string
    role?: EnumRoleFilter<"Utilisateurs"> | $Enums.Role
    entrepriseId?: IntNullableFilter<"Utilisateurs"> | number | null
  }

  export type EntreprisesCreateWithoutUtilisateursInput = {
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    devises: DevisesCreateNestedOneWithoutEntreprisesInput
  }

  export type EntreprisesUncheckedCreateWithoutUtilisateursInput = {
    id?: number
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    deviseId: number
  }

  export type EntreprisesCreateOrConnectWithoutUtilisateursInput = {
    where: EntreprisesWhereUniqueInput
    create: XOR<EntreprisesCreateWithoutUtilisateursInput, EntreprisesUncheckedCreateWithoutUtilisateursInput>
  }

  export type EntreprisesUpsertWithoutUtilisateursInput = {
    update: XOR<EntreprisesUpdateWithoutUtilisateursInput, EntreprisesUncheckedUpdateWithoutUtilisateursInput>
    create: XOR<EntreprisesCreateWithoutUtilisateursInput, EntreprisesUncheckedCreateWithoutUtilisateursInput>
    where?: EntreprisesWhereInput
  }

  export type EntreprisesUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: EntreprisesWhereInput
    data: XOR<EntreprisesUpdateWithoutUtilisateursInput, EntreprisesUncheckedUpdateWithoutUtilisateursInput>
  }

  export type EntreprisesUpdateWithoutUtilisateursInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    devises?: DevisesUpdateOneRequiredWithoutEntreprisesNestedInput
  }

  export type EntreprisesUncheckedUpdateWithoutUtilisateursInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviseId?: IntFieldUpdateOperationsInput | number
  }

  export type EntreprisesCreateWithoutDevisesInput = {
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    Utilisateurs?: UtilisateursCreateNestedManyWithoutEntreprisesInput
  }

  export type EntreprisesUncheckedCreateWithoutDevisesInput = {
    id?: number
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
    Utilisateurs?: UtilisateursUncheckedCreateNestedManyWithoutEntreprisesInput
  }

  export type EntreprisesCreateOrConnectWithoutDevisesInput = {
    where: EntreprisesWhereUniqueInput
    create: XOR<EntreprisesCreateWithoutDevisesInput, EntreprisesUncheckedCreateWithoutDevisesInput>
  }

  export type EntreprisesCreateManyDevisesInputEnvelope = {
    data: EntreprisesCreateManyDevisesInput | EntreprisesCreateManyDevisesInput[]
    skipDuplicates?: boolean
  }

  export type EntreprisesUpsertWithWhereUniqueWithoutDevisesInput = {
    where: EntreprisesWhereUniqueInput
    update: XOR<EntreprisesUpdateWithoutDevisesInput, EntreprisesUncheckedUpdateWithoutDevisesInput>
    create: XOR<EntreprisesCreateWithoutDevisesInput, EntreprisesUncheckedCreateWithoutDevisesInput>
  }

  export type EntreprisesUpdateWithWhereUniqueWithoutDevisesInput = {
    where: EntreprisesWhereUniqueInput
    data: XOR<EntreprisesUpdateWithoutDevisesInput, EntreprisesUncheckedUpdateWithoutDevisesInput>
  }

  export type EntreprisesUpdateManyWithWhereWithoutDevisesInput = {
    where: EntreprisesScalarWhereInput
    data: XOR<EntreprisesUpdateManyMutationInput, EntreprisesUncheckedUpdateManyWithoutDevisesInput>
  }

  export type EntreprisesScalarWhereInput = {
    AND?: EntreprisesScalarWhereInput | EntreprisesScalarWhereInput[]
    OR?: EntreprisesScalarWhereInput[]
    NOT?: EntreprisesScalarWhereInput | EntreprisesScalarWhereInput[]
    id?: IntFilter<"Entreprises"> | number
    nom?: StringFilter<"Entreprises"> | string
    email?: StringFilter<"Entreprises"> | string
    telephone?: StringFilter<"Entreprises"> | string
    dbKey?: StringFilter<"Entreprises"> | string
    Statut?: EnumStatutFilter<"Entreprises"> | $Enums.Statut
    date_creation?: DateTimeNullableFilter<"Entreprises"> | Date | string | null
    deviseId?: IntFilter<"Entreprises"> | number
  }

  export type UtilisateursCreateManyEntreprisesInput = {
    id?: number
    nom: string
    prenom: string
    login: string
    password: string
    email: string
    role: $Enums.Role
  }

  export type UtilisateursUpdateWithoutEntreprisesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UtilisateursUncheckedUpdateWithoutEntreprisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UtilisateursUncheckedUpdateManyWithoutEntreprisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type EntreprisesCreateManyDevisesInput = {
    id?: number
    nom: string
    email: string
    telephone: string
    dbKey: string
    Statut?: $Enums.Statut
    date_creation?: Date | string | null
  }

  export type EntreprisesUpdateWithoutDevisesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilisateurs?: UtilisateursUpdateManyWithoutEntreprisesNestedInput
  }

  export type EntreprisesUncheckedUpdateWithoutDevisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Utilisateurs?: UtilisateursUncheckedUpdateManyWithoutEntreprisesNestedInput
  }

  export type EntreprisesUncheckedUpdateManyWithoutDevisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    dbKey?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutFieldUpdateOperationsInput | $Enums.Statut
    date_creation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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