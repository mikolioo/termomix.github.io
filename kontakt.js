
body{
font-family:Arial, sans-serif;
margin:0;
background:#f5fff5;
color:#222;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
background:#1f8f3a;
color:white;
}

nav a{
margin:0 10px;
color:white;
text-decoration:none;
font-weight:bold;
}

.hero{
text-align:center;
padding:80px 20px;
background:white;
}

.btn{
background:#1f8f3a;
color:white;
padding:12px 20px;
text-decoration:none;
border-radius:6px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:20px;
padding:40px;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 10px rgba(0,0,0,0.1);
}

.container{
padding:40px;
max-width:900px;
margin:auto;
}

#opinie-slider{
display:flex;
gap:20px;
overflow:hidden;
}

.opinia{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 10px rgba(0,0,0,0.1);
min-width:250px;
}

.opinia img{
width:60px;
height:60px;
border-radius:50%;
}
