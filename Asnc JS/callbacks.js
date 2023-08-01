const posts=[
{title: 'post one', body: 'This is post one'},
{title: 'post two', body: 'This is post two'}
];
function getPost(){
   setTimeout(()=>{
    let output='';
    posts.forEach((post,index)=>{
    output+=`<li>${posts.title}<li>`;
    }
    );
    document.body.innerHTML=output;
   },1000) ;
}