import CollisionObject from '../../shared/models/collision-object';
/**
 * isCollidingBottom()
 * -------------------
 * Used to determine whether the bottom of obj1 collides with the top of
 * obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
declare const isCollidingBottom: (obj1: CollisionObject, obj2: CollisionObject) => boolean;
export default isCollidingBottom;
