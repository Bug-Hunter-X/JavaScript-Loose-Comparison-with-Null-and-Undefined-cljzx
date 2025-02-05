# JavaScript Loose Comparison with Null and Undefined

This repository demonstrates a common JavaScript bug involving loose comparison (==) with null and undefined values.  The bug arises from the fact that loose comparison does type coercion, leading to unexpected results when comparing null or undefined with numbers or other types.

## Bug Description
The bug lies in the `foo` function.  When `a` or `b` is null or undefined, the loose comparison `a == null` (or `b == null`) evaluates to true, even though a strict comparison (`a === null`) would only be true if `a` is strictly null (not undefined).

## Solution
Using strict equality (`===`) prevents the type coercion and ensures that the function correctly handles null and undefined values. The solution replaces the loose comparison with strict equality, resulting in more predictable behavior.