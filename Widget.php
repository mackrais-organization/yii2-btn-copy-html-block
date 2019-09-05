<?php
/**
 * Created by PhpStorm.
 * @user: MackRais
 * @site: http://mackrais.com
 * @email: mackraiscms@gmail.com
 */

namespace mackrais\copyblock;

use yii\helpers\Html;

/**
 * Class Widget
 * @package mackrais\copyblock
 * @author Oleh Boiko < mackraiscms@gmail.com >
 * @since 1.0
 */
class Widget extends \yii\base\Widget
{
    const EVENT_CLONE_BLOCK = 'cloneBlock';
    const EVENT_DELETE_BLOCK = 'deleteBlock';

    /**
     * @var string
     */
    public $caption = '';

    /**
     * @var array
     * Options @see() yii\helpers\Html::a()
     */
    public $options = [];

    /**
     * @var string
     * Can use any jquery selector. For example
     *  .item-block | #test | [data-id="12"] | h1 , etc.
     */
    public $selectorCloneBlock;

    /**
     * @var string
     * Js call back function
     * example function beforeClone(event, $this, $cloneBlock){} other explain see in assets/js/mr.clone.block.js
     */
    public $beforeInsertBlock;

    /**
     * @var string
     * Js call back function
     * example: function afterClone(event, $this, $cloneBlock, $tmpBlock){} other explain see in assets/js/mr.clone.block.js
     */
    public $afterInsertBlock;

    /**
     * @var string
     * Js call back function
     * example function beforeDelete(event, $this, $block){} other explain see in assets/js/mr.clone.block.js
     */
    public $beforeDeleteBlock;

    /**
     * @var string
     * Js call back function
     * example function afterDelete(event, $this, $block){} other explain see in assets/js/mr.clone.block.js
     */
    public $afterDeleteBlock;

    public $event = self::EVENT_CLONE_BLOCK;

    /**
     * @inheritdoc
     */
    public function init()
    {
        WidgetAssets::register($this->getView());
    }

    /**
     * Run widget
     * @return string
     */
    public function run()
    {
        $options = [
            'class' => 'mr-btn-add ' . (isset($this->options['class']) ? $this->options['class'] : '' ),
            'data-mr-event' => $this->event,
            'data-mr-clone-block' => $this->selectorCloneBlock
        ];
        if(!empty($this->beforeInsertBlock))
            $options['before-insert'] = $this->beforeInsertBlock;

        if(!empty($this->afterInsertBlock))
            $options['after-insert'] = $this->afterInsertBlock;

        if(!empty($this->beforeDeleteBlock))
            $options['before-delete'] = $this->beforeDeleteBlock;

        if(!empty($this->afterDeleteBlock))
            $options['after-delete'] = $this->afterDeleteBlock;

        if (!empty($this->options) && is_array($this->options)) {
            $options = array_merge($this->options, $options);
        }
        if(isset($options['classRemoveBtn'])){
            $options['data-mr-class-remove-btn'] = $this->options['classRemoveBtn'];
            unset($options['classRemoveBtn']);
        }
        return Html::a($this->caption, 'javascript:', $options);
    }
}
