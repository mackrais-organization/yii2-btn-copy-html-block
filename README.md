# yii2-btn-copy-html-block

[![Latest Stable Version](https://poser.pugx.org/mackrais/yii2-btn-copy-html-block/v/stable)](https://packagist.org/packages/mackrais/yii2-btn-copy-html-block)
[![Latest Unstable Version](https://poser.pugx.org/mackrais/yii2-btn-copy-html-block/v/unstable)](https://packagist.org/packages/mackrais/yii2-btn-copy-html-block)
[![License](https://poser.pugx.org/mackrais/yii2-btn-copy-html-block/license)](https://packagist.org/packages/mackrais/yii2-btn-copy-html-block)
[![Total Downloads](https://poser.pugx.org/mackrais/yii2-btn-copy-html-block/downloads)](https://packagist.org/packages/mackrais/yii2-btn-copy-html-block)
[![Monthly Downloads](https://poser.pugx.org/mackrais/yii2-btn-copy-html-block/d/monthly)](https://packagist.org/packages/mackrais/yii2-btn-copy-html-block)
[![Daily Downloads](https://poser.pugx.org/mackrais/yii2-btn-copy-html-block/d/daily)](https://packagist.org/packages/mackrais/yii2-btn-copy-html-block)


> NOTE: Widget should always be the block that we cloned.


Installation
------------

The preferred way to install this extension is through [composer](http://getcomposer.org/download/).

Either run

```
php composer.phar require --prefer-dist mackrais/yii2-btn-copy-html-block "dev-master"
```

or 

```
"mackrais/yii2-btn-copy-html-block": "dev-master"
```
or add

```
 composer require mackrais/yii2-btn-copy-html-block:"dev-master"
```

to the require section of your `composer.json` file.

## Usage

```php
   <div class="mr-color-input pull-left">
           <?= $form->field($model, 'colors[]')->textInput(['type'=>'color','class'=>'product-color-input '])->label(false) ?>
           <?= mackrais\copyblock\Widget::widget([
               'caption'=>'', // any text button
               'options'=>[
                 'class'=>'my-class', // Options yii\helpers\Html::a()  
                ], // any text button
               'beforeInsertBlock'=>'beforeClone(event, $this, $cloneBlock)', // 
               'afterInsertBlock'=>'afterClone(event, $this, $cloneBlock, $tmpBlock)', // 
               'beforeDeleteBlock'=>'beforeDelete(event, $this, $block)', // 
               'afterDeleteBlock'=>'afterDelete(event, $this, $block)', // 
               'selectorCloneBlock'=>'.mr-color-input', // selector clone block
           ]) ?>
       </div>
       <div class="clearfix"></div>

```
## Usage js events

```js
    function beforeClone(event, $this, $cloneBlock) {
          console.log('Block ',$cloneBlock,' will be cloned!');
    }
    
    function afterClone(event, $this, $cloneBlock, $tmpBlock) {
          console.log('Block ',$tmpBlock,' was cloned!');
    }
    
    function beforeDelete(event, $this, $block) {
          console.log('Block ',$block, ' will be deleted!');
    }
    
    function afterDelete(event, $this, $block) {
          console.log('Block ',$block,' was deleted!');
    }

```

## Result

![Screenshot](https://archive.org/download/screen-yii2-btn-copy-html-block/screen-yii2-btn-copy-html-block.png)
![Screenshot](https://archive.org/download/screen-yii2-btn-copy-html-block1/screen-yii2-btn-copy-html-block1.png)



## License

**yii2-btn-copy-html-block** is released under the BSD 3-Clause License. See the bundled `LICENSE.md` for details.
