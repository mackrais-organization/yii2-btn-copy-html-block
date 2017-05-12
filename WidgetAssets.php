<?php
/**
 * Created by PhpStorm.
 * @user: MackRais
 * @site: http://mackrais.com
 * @email: mackraiscms@gmail.com
 */
namespace mackrais\copyblock;


use yii\web\AssetBundle;

/**
 * Class WidgetAssets
 * @package mackrais\copyblock
 */
class WidgetAssets extends AssetBundle
{
    public $sourcePath = '@mackrais/copyblock/assets';
    public $baseUrl = '@mackrais/copyblock/assets';

    public $depends = [
        'yii\web\JqueryAsset'
    ];

    public function init() {
        $this->css[] = YII_DEBUG ? 'css/mr.clone.block.css' : 'css/mr.clone.block.min.css';
        $this->js[] = YII_DEBUG ? 'js/mr.clone.block.js' : 'js/mr.clone.block.min.js';
    }
}
