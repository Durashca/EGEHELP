import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('menu')
export class menu extends Component {
    
    loadInformaticsScene() {
        director.loadScene('informatics');
    }

    loadPhysicsScene() {
        director.loadScene('physics');
    }

    loadRussianScene() {
        director.loadScene('russian');
    }

    loadMathematicsScene() {
        director.loadScene('mathematics');
    }
}