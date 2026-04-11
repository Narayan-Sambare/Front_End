function callApi()
{
    let p=fetch("https://jsonplaceholder.typicode.com/todos/");
    let table=document.getElementById("tbl");
    table.innerHTML="";
            let thead=document.createElement("thead");
            let tr=document.createElement("tr");
            let userId=document.createElement("th");
            userId.innerHTML="USER ID";
            let id=document.createElement("th");
            id.innerHTML="ID";
            let title=document.createElement("th");
            title.innerHTML="TITLE";
            let completed=document.createElement("th");
            completed.innerHTML="COMPLETED";
            
            tr.appendChild(userId);
            tr.appendChild(id);
            tr.appendChild(title);
            tr.appendChild(completed);
            
            thead.appendChild(tr);
            table.appendChild(thead);
            
            let tbody=document.createElement("tbody");
            table.appendChild(tbody);

p.then((data)=>data.json()).then(res=>{
        res.forEach(element => {
            let userId=element.userId;
            let id =element.id;
            let title=element.title;
            let completed=element.completed;
            
            let tr=document.createElement("tr");
            let userIdInfo=document.createElement("td");
            userIdInfo.innerHTML=userId;
            let idInfo=document.createElement("td");
            idInfo.innerHTML=id;
            let titleInfo=document.createElement("td");
            titleInfo.innerHTML=title;
            let completedInfo=document.createElement("td");
            completedInfo.innerHTML=completed;
            tbody.appendChild(tr);
            tr.appendChild(userIdInfo);
            tr.appendChild(idInfo);
            tr.appendChild(titleInfo);
            tr.appendChild(completedInfo);
        });
    })
    .catch(err=>console.log(err))
}

function searchById()
{
    let inputValue=document.getElementById("id").value;
    fetch("https://jsonplaceholder.typicode.com/todos/"+inputValue)
    .then(res=>res.json())
    .then(data=> {
        let table=document.getElementById("tbl");
        table.innerHTML="";
        let tr=document.createElement("tr");
        let userId=document.createElement("th");
                userId.innerHTML="USER ID";
        let id=document.createElement("th");
                id.innerHTML="ID";
        let title=document.createElement("th");
                title.innerHTML="TITLE";
        let completed=document.createElement("th");
                completed.innerHTML="COMPLETED";
                table.appendChild(tr);
                tr.appendChild(userId);
                tr.appendChild(id);
                tr.appendChild(title);
                tr.appendChild(completed);

       
                let Ntr=document.createElement("tr");
                let NuserId=document.createElement("td");
                NuserId.innerHTML=data.userId;
                
                let Nid=document.createElement("td");
                Nid.innerHTML=data.id;
                let Ntitle=document.createElement("td");
                Ntitle.innerHTML=data.title;
                let Ncompleted=document.createElement("td");
                Ncompleted.innerHTML=data.completed;
                
                table.appendChild(Ntr);
                Ntr.appendChild(Nid);
                Ntr.appendChild(Ntitle);
                Ntr.appendChild(Ncompleted);
                Ntr.appendChild(NuserId);
                
        })

    .catch(err=>console.log(err));

}




// let promise=fetch("https://jsonplaceholder.typicode.com/todos/");
// promise.then(
//         res=>{
//             let data=res.json();
//             data.then(
//                 arr=>{
//                     for (let item of arr)
//                     {
//                         console.log(item.id+"\t"+item.title);
//                     }
//                 }
//             ).catch(err=>console.log(err))
//         }
// ).catch(err=> console.log(err));