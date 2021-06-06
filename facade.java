public interface Shape { void draw(); } 

public class Rectangle implements Shape { @Override public void draw() { System.out.println("Rectangle::draw()"); } }

public class Square implements Shape { @Override public void draw() { System.out.println("Square::draw()"); } }

public class Circle implements Shape { @Override public void draw() { System.out.println("Circle::draw()"); } }

public class ShapeMaker { private Shape circle; private Shape rectangle; private Shape square; public ShapeMaker() { circle = new Circle(); rectangle = new Rectangle(); square = new Square()}

public class FacadePatternDemo { public static void main(String[] args) { ShapeMaker shapeMaker = new ShapeMaker(); shapeMaker.drawCircle(); shapeMaker.drawRectangle(); shapeMaker.drawSquare(); } }

Circle::draw() Rectangle::draw() Square::draw() 
