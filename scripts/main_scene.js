
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene', active: true });
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('back', 'assets/background.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('taro', 'assets/taro.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(D_WIDTH/2, D_HEIGHT/2, 'back');
        const hanako = this.physics.add.sprite(750, 400, 'hanako');
        const taro = this.physics.add.sprite(50, 50, 'taro');

        this.hanako=hanako;
        this.taro=taro;
    }
    
  // 毎フレーム実行される繰り返し処理
    update(){
    }
}