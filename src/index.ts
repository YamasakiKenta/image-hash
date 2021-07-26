import { default as DifferenceHashBuilder } from './DifferenceHashBuilder';
import { default as HexadecimalToHash } from './HexadecimalToHash';
import { default as Hash } from './Hash';

interface globalThis {
    hash: any,
}
declare var global: globalThis

global.hash = {
    DifferenceHashBuilder,
    HexadecimalToHash,
    Hash,
}