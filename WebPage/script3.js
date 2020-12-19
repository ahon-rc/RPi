var firebaseConfig = {
    apiKey: "AIzaSyBpyG1uJfNGIhK3I66M6SXnw_ne7bxcTFc",
    authDomain: "awesome-9caed.firebaseapp.com",
    databaseURL: "https://awesome-9caed.firebaseio.com",
    projectId: "awesome-9caed",
    storageBucket: "awesome-9caed.appspot.com",
    messagingSenderId: "65857310032",
    appId: "1:65857310032:web:9413fe0d65bd3233"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
        let a=0,b=0,x=0,y=0,z=0,on1=0,off1=0,on2=0,off2=0,on3=0,off3=0; 

    google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart1);
      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Room 1', 'Room 2'],
          ['Day 1', 3, 5.5],
          ['Day 2', 1, 0.5],
          ['Day 3', 3, 2],
          ['Day 4', a, b]
        ]);
        var options = {
          colors: ['#76A928','#BD1143'],
          title: 'Usage Analysis',
          titleTextStyle: {
            fontName: 'monospace',
            fontSize: 20
          },
          backgroundColor: '#F7F0F0',
          chartArea: {'width': '20%', 'height': '80%'},
         //  legend: {
         //   font-family: 'monospace',
         //   font-size: '12px',
          // }
          
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

       google.charts.load('current', {'packages':['corechart']});
       google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() 
      {

        var data = google.visualization.arrayToDataTable([
          ['Appliances', 'Usage per Day'],
          ['Fan',y],
          ['Light',x],
          ['AC',z],
          ['Wastage',7]
        ]);

        var options = {
          title: 'My Daily Usage',
          titleTextStyle: {
            fontName: 'monospace',
            fontSize: 15
          },
          'chartArea': {'width': '100%', 'height': '80%'},
          backgroundColor: '#F7F0F0'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }


      function openCity(evt, cityName) {
    // Declare all variables
      var i, tabcontent, tablinks;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
}


  let db1 = firebase.database().ref('LIGHT');
  let db2 = firebase.database().ref('FAN');
  let db3 = firebase.database().ref('AC');
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  db1.on("value",function(snapshot)
  {
    c1=snapshot.val();
  });
  db2.on("value",function(snapshot)
  {
    c2=snapshot.val();
  });
  db3.on("value",function(snapshot)
  {
    c3=snapshot.val();
  });
  if(c1==1)
    document.querySelector('#ABC').innerHTML="<b>STATUS: ON</b>";
  if(c1==0)
    document.querySelector('#ABC').innerHTML="<b>STATUS: OFF</b>";
  if(c2==1)
    document.querySelector('#DEF').innerHTML="<b>STATUS: ON</b>";
  if(c2==0)
    document.querySelector('#DEF').innerHTML="<b>STATUS: OFF</b>";
  if(c3==1)
    document.querySelector('#GHI').innerHTML="<b>STATUS: ON</b>";
  if(c3==0)
    document.querySelector('#GHI').innerHTML="<b>STATUS: OFF</b>";
  function fn1(){
    if(c1==0)
    {
      db1.set(1);
      c1=1;
      document.querySelector('#ABC').innerHTML="<b>STATUS: ON</b>";
      let d = new Date();
      on1 = d.getTime();
    }
    else{
      db1.set(0);
      c1=0;
      document.querySelector('#ABC').innerHTML="<b>STATUS: OFF</b>";
      let d = new Date();
      off1 = d.getTime();
      if(on1!=0)
      {
        a+=Math.round((off1-on1)/1000);
        x+=Math.round((off1-on1)/1000); 
        console.log(a);
        drawChart1();
        drawChart2();
      }
    }
  }
  function fn2(){
    if(c2==0)
    {
      db2.set(1);
      c2=1;
      document.querySelector('#DEF').innerHTML="<b>STATUS: ON</b>";
      let e = new Date();
      on2 = e.getTime();
    }
    else{
      db2.set(0);
      c2=0;
      document.querySelector('#DEF').innerHTML="<b>STATUS: OFF</b>";
      let e = new Date();
      off2 = e.getTime();
      if(on2!=0)
      {
        a+=Math.round((off2-on2)/1000);
        y+=Math.round((off2-on2)/1000);
        console.log(a);
        drawChart1();
        drawChart2();
      }
    }
  }  
    function fn3(){
    if(c3==0)
    {
      db3.set(1);
      c3=1;
      document.querySelector('#GHI').innerHTML="<b>STATUS: ON</b>";
      let f = new Date();
      on3 = f.getTime();
    }
    else{
      db3.set(0);
      c3=0;
      document.querySelector('#GHI').innerHTML="<b>STATUS: OFF</b>";
      document.querySelector('#DEF').innerHTML="<b>STATUS: OFF</b>";
      let f = new Date();
      off3 = f.getTime();
      if(on3!=0)
      {
        b+=Math.round((off3-on3)/1000);
        z=b;
        drawChart1();
        drawChart2();
      }
    }
  }