/**
 * Created by PhpStorm.
 * User: MackRais
 * site: http://mackrais.com
 * email: mackraiscms@gmail.com
 */
$(document).ready(function(){
    /**
     * Function clone block when click on object
     * @attribute before-insert - js callback function before insert
     *      example
            function beforeClone(event, $this, $cloneBlock) {
                $cloneBlock.removeClass('hasError');
                $cloneBlock.typeahead('destroy');
                $('#remote .typeahead').typeahead('destroy');
            },
      @param event - string with type event : after-clone | before-clone
      @param $this - DOM object current element
      @param $cloneBlock - DOM object clone element
     * @attribute after-insert - js callback function after insert
     *   example
             function afterClone(event, $this, $cloneBlock, $tmpBlock) {
              $('#remote .typeahead').typeahead('destroy');
              initTypeahead($('#remote .typeahead'));
            },
     @param event - string with type event : after-clone | before-clone
     @param $this - DOM object current element
     @param $cloneBlock - Parent DOM object clone element
     @param $tmpBlock - Object element DOM, which will be inserted
     * @attribute data-mr-clone-block -  parent block by cloning can be selector, class, tag ... Any appeal to member in jQuery
     * @attribute data-mr-event - ID events for library functions
     */
    $(document)
        .off('click.mrCloneBlock')
        .on('click.mrCloneBlock','[data-mr-event="cloneBlock"]',function(e){
        e.preventDefault();
        var $this = $(this);
        var onBeforeInsert = typeof ($this.attr('before-insert')) == "undefined" ? '' : new Function('event',"$this","$cloneBlock",$this.attr('before-insert'));
        var onAfterInsert = typeof ($this.attr('after-insert')) == "undefined" ? '' : new Function('event',"$this","$cloneBlock","$clonedBlock",$this.attr('after-insert'));
        var $clone_block = typeof ($this.data('mr-clone-block')) == "undefined"  ? $this : $this.parents($this.data('mr-clone-block')).eq(0);
        $clone_block.val('');
        if(typeof onBeforeInsert == "function")
             onBeforeInsert('before-clone',$this,$clone_block);
        var  $tmp_block = $clone_block.eq(0).clone(false,false);
        $tmp_block.find('input').val( $(this).data('default-clone') );
        var cloneIndex = $($(this).data('mr-clone-block')).length;
        $tmp_block.find('input').attr('id','clone_b'+$clone_block.attr('class')+cloneIndex);
        $tmp_block.find('.help-block').empty();
        $tmp_block.find('[data-mr-event="cloneBlock"]')
            .removeClass()
            .addClass('mr-btn-remove')
            .text('');
        $tmp_block.find('[data-mr-event="cloneBlock"]').attr('data-mr-event','deleteBlock');
        $($tmp_block).insertAfter($clone_block);
        if(typeof onAfterInsert == "function")
            onAfterInsert('after-clone',$this,$clone_block,$tmp_block);
    });

    /**
     * Function delete clone block
     * @attribute before-delete - js callback function before delete
     *      example
            function beforeDelete(event, $this, $block) {
               console.log('Block ',$block, ' will be deleted!');
            }
     @param event - string with type event : after-delete | before-delete
     @param $this - DOM object current element
     @param $block - DOM object clone element
     * @attribute after-delete - js callback function after delete
     *   example
             function afterDelete(event, $this, $block) {
                 console.log('Block ',$block,' was deleted!');
             }
     @param event - string with type event : after-delete | before-delete
     @param $this - DOM object current element
     @param $block - Parent DOM object clone element
     * @attribute data-mr-clone-block -  parent block by cloning can be selector, class, tag ... Any appeal to member in jQuery
     * @attribute data-mr-event - ID events for library functions
     */
    $(document)
        .off('click.mrDeleteCloneBlock')
        .on('click.mrDeleteCloneBlock','[data-mr-event="deleteBlock"]',function(e){
        e.preventDefault();
        var $this = $(this);
        var $clone_block = typeof ($(this).data('mr-clone-block')) == "undefined"  ? $(this) : $(this).parents($(this).data('mr-clone-block')).eq(0);
        var onBeforeDelete = typeof ($this.attr('before-delete')) == "undefined" ? '' : new Function('event',"$this","$block",$this.attr('before-delete'));
        var onAfterDelete = typeof ($this.attr('after-delete')) == "undefined" ? '' : new Function('event',"$this","$block",$this.attr('after-delete'));
        if(typeof onBeforeDelete == "function")
            onBeforeDelete('before-before',$this,$clone_block);
        $clone_block.eq(0).remove();
        if(typeof onAfterDelete == "function")
            onAfterDelete('after-delete',$this,$clone_block);
    });
});