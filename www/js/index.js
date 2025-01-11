window.onload = function (){
    const addButton = document.querySelector('input[value=Ajouter]');
    const resetButton = document.querySelector('input[value=Réinitialiser');
    
    const taskfield = document.getElementById('task');
    const tasklist= document.getElementById('taskList');
    const finishedTasks = document.getElementById('done');



    addButton.onclick = function (){
        const item = document.createElement('li');

        item.innerHTML = taskfield.value;

        tasklist.append(item);
        $(item).on('swiperight',function (){
            //$(item).toggleClass('terminer')
            $(this).hide('fast',function(){
                if($(this).parent().attr('id') === 'taskList'){
                    console.log('terminer');
                    $(this).appendTo(finishedTasks).show('fast');
                }
                else{
                    console.log('en cours');
                    $(this).appendTo(tasklist).show('fast');
                }
              //  $(this).remove();
                //$(this).appendTo(finishedTasks).show('fast');
            });
          //  finishedTasks.append(item);
            

        })

        $(item).on('swipeleft',function (){
            $(this).hide('slow',function(){
                $(this).remove();
            });
        })
        
        $(tasklist).listview('refresh');
        taskfield.select();
    };

    
    
    //     addButton.onclick = function (){
    //         const item = document.createElement('li');
    //         item.innerHTML = taskfield.value;

    //         tasklist.innerHTML += `<li>${taskfield.value}</li>`;
    //                 taskfield.select();
    //                 $(tasklist).listview('refresh');
                
    //         };
    //     };
        
    //     $(item).on('swiperight', function(){
    //         console.log('swiped right');
    //         $(item).toggleClass('terminer');


    //     })


    //     $(item).on('swipeleft', function(){

    //         $(item).hide('slow', function(){;
    //             $(item).remove();
    //     })
    // })
    
    //     resetButton.onclick = function () {
    //         taskList.innerHTML = ''; 
    //         $(taskList).listview('refresh'); 
    //     };
    
    };

    //v1 branche 1
    //swiple right line through
    //swipe left delete

    //v2 branche 2
    //swipe left pour supprimer
    //swipe right pour mettre dans le compartiment corresponant soit en cours ou terminer