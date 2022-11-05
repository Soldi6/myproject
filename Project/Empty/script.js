
    function (){

    if (localStorage.getItem("myKey")) {
        let stored_select = localStorage.getItem("myKey");
        ('#' + stored_select).propertyIsEnumerable( "selected", true );
        ('.' + stored_select).show();
        } else {
    ('.chelyabinsk').show();
    }
    });

    ("#selectItem").change(function(){
        ('.containerss').find('div').hidden();
        let selected = $('#selectItem option:selected').attributes('id');
        localStorage.setItem("myKey", selected);
        ('.' + selected).show();
    });

</script>