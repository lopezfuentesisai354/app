import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

class Position {
  constructor(public x: number, public y: number) {}
}

class Block {
  element: HTMLElement;

  constructor(public x: number, public y: number) {
    this.element = document.createElement('div');
    this.element.setAttribute('class', 'block');
  }

  init() {
    document.getElementById('board')?.appendChild(this.element);
  }

  render() {
    const elementWidth = 30;
    const elementHeight = 30;
    this.element.style.left = `${this.y * elementWidth}px`;
    this.element.style.top = `${this.x * elementHeight}px`;
  }

  fall() {
    this.x += 1; 
    this.render(); 
  }

  moveRight() {
    this.y += 1;
    this.render();
  }

  moveLeft() {
    this.y -= 1;
    this.render();
  }

  getPosition() {
    return new Position(this.x, this.y);
  }

  destroy() {
    this.element.remove();
  }
}

class Shape {
  blocks: Block[];

  constructor(blocks: Block[]) {
    this.blocks = blocks;
  }

  init() {
    for (let block of this.blocks) {
      block.init();
    }
  }

  render() {
    for (let block of this.blocks) {
      block.render();
    }
  }

  fall() {
    for (let block of this.blocks) {
      block.fall();
    }
  }

  moveRight() {
    for (let block of this.blocks) {
      block.moveRight();
    }
  }

  moveLeft() {
    for (let block of this.blocks) {
      block.moveLeft();
    }
  }

  clear() {
    for (let block of this.blocks) {
      block.destroy();
    }
    this.blocks = [];
  }

  addBlocks(blocks: Block[]) {
    this.blocks.push(...blocks);
  }

  rotate() {
    let positions = this.rotatePosition();
    let blocks = positions.map((p) => new Block(p.x, p.y));
    this.clear();
    this.addBlocks(blocks);
  }

  rotatePosition(): Position[] {
    return [];
  }
}

class Square extends Shape {
  constructor(x: number, y: number) {
    let blocks = [
      new Block(x, y),
      new Block(x, y + 1),
      new Block(x + 1, y),
      new Block(x + 1, y + 1)
    ];
    super(blocks);
  }
}

class Board {
  blocks: Block[] = [];
  shapes: Shape[] = [];
  interval?: any;
  loopInterval = 1000;
  gameOver = false;
  score = 0;

  setScore(value: number) {
    this.score = value;
  }

  getScore() {
    return this.score;
  }

  init() {
    // Limpiamos el tablero
    this.clearBoard();
    this.gameOver = false;
    this.setScore(0);
  }

  clearBoard() {
    const boardElement = document.getElementById('board');
    if (boardElement) {
      boardElement.innerHTML = ''; // Limpiamos cualquier bloque existente
    }
  }

  newGame() {
    this.init();
    this.spawnShape();
    this.startGameLoop();
  }

  startGameLoop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => this.gameLoop(), this.loopInterval);
  }

  gameLoop() {
    if (this.gameOver) {
      clearInterval(this.interval);
      return;
    }
    this.shapes.forEach((shape) => {
      shape.fall();
      shape.render();
    });
  }

  spawnShape() {
    const newShape = new Square(0, 4); 
    this.shapes.push(newShape);
    newShape.init();
  }

  downKeyPress() {
    this.shapes.forEach((shape) => {
      shape.fall();
      shape.render();
    });
  }

  upKeyPress() {
    this.shapes.forEach((shape) => {
      shape.rotate();
      shape.render();
    });
  }

  leftKeyPress() {
    this.shapes.forEach((shape) => {
      shape.moveLeft();
      shape.render();
    });
  }

  rightKeyPress() {
    this.shapes.forEach((shape) => {
      shape.moveRight();
      shape.render();
    });
  }
}

@Component({
  selector: 'app-tetris-edumind',
  templateUrl: './tetris-edumind.page.html',
  styleUrls: ['./tetris-edumind.page.scss'],
  imports: [IonicModule]
})
export class TetrisEdumindPage implements OnInit {
  board: Board;

  constructor(private router: Router) {
    this.board = new Board();
  }

  ngOnInit() {
    this.board.init();
  }

  newGame() {
    this.board.newGame();
  }

  downKeyPress() {
    this.board.downKeyPress();
  }

  rotate() {
    this.board.upKeyPress();
  }

  leftKeyPress() {
    this.board.leftKeyPress();
  }

  rightKeyPress() {
    this.board.rightKeyPress();
  }
}
