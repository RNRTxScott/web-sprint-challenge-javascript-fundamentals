// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1{
    constructor(length1, width1, height1){
        this.length1 = length1;
        this.width1 = width1;
        this.height1 = height1;
    }
volume1(length1, width1, height1){
return length1 * width1 * height1;
}
surfaceArea1(){
    return 2 * (this.length1 * this.width1 + this.length1 * this.height1 + this.width1 * this.height1);
}
}

const cuboid1 = new CuboidMaker1(4, 5, 5);

  // Test your volume and surfaceArea methods by uncommenting the logs below:
   console.log(cuboid1.volume1()); // 100
   console.log(cuboid1.surfaceArea1()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.