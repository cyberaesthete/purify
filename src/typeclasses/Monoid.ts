import Semigroup from 'typeclasses/Semigroup'

export default interface Monoid<T> extends Semigroup<T> {
    empty(): Monoid<T>
    'fantasy-land/empty': Monoid<T>['empty']
}