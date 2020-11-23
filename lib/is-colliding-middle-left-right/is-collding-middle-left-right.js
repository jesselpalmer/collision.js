"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_colliding_left_1 = require("./is-colliding-left");
var is_colliding_right_1 = require("./is-colliding-right");
/**
 * isCollidingMiddleRightOrLeft()
 * ------------------------------
 * This function is to be used to determine whether two objects collide on the
 * right or left sides. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingMiddleRightOrLeft = function (obj1, obj2) {
    return is_colliding_right_1.default(obj1, obj2) || is_colliding_left_1.default(obj1, obj2);
};
exports.default = isCollidingMiddleRightOrLeft;