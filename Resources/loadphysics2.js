function load() {
  // var div = document.getElementById("PhysicLoad");
  var div2 = document.getElementById("PhysicLoad2");
  // var div3 =document.getElementById("PhysicLoad3");
  // var div4 =document.getElementById("PhysicLoad4");

  let data = [
    {
      title: "Study resistors in a series circuit",
      link: "../simulations/physics/studyresistersinseriescircut.html",
    },
    {
      title: "Study Resistors in a parallax circuit",
      link: "../simulations/physics/studyresistersinparallelcircut.html",
    },
    {
      title: "Verify Ohm’s law (using wire as a conductor)",
      link: "../simulations/physics/ohmusingconductor.html",
    },
    {
      title: "Find the focal length of a convex lens by parallax method",
      link: "../simulations/physics/focallength.html",
    },
    {
      title: "Trace the Magnetic field using a bar magnet ",
      link: "../simulations/physics/magnetbar.html",
    },
    {
      title: "To verify the laws of refraction by using a glass slab",
      link: "../simulations/physics/RefractionofLight.html"
    },
    // {
    //     title: `AC Sonometer`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Concave Mirror-Focal
    //     Length by u-v Method`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Convex Mirror-Focal
    //     Length`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Concave Lens-Focal Length`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Spectrometer-Prism`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Refractive Index of Liquid`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Metre bridge-Resistance
    //     of a wire`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `MetreBridge-Law of
    //     Combination of resistors`,
    //     link: "ohm.html"
    // }, {
    //     title: `Diode Characteristics`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Zener Diode`,
    //     link: "ohm.html"
    // },
    // {
    //     title: `Transistor Characteristics`,
    //     link: "ohm.html"
    // }
  ];
  let HtmlText = "";
  data.map((d, i) => {
    HtmlText += `
    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-4  mx-auto"
    style="">
    <a href="${d.link}" style="text-decoration:none; color:white">
    <div class="card" style="border:1px solid #71AF06; z-index:111;">

        <img class="imagestyle" src="../pictures/physics/phy10/${i + 1}.png"
            class="card-img-top"
            style="width:100%; height: auto; object-fit:cover;" alt=" the experminent Picture of" +${d.title}>

        <div class="card-body position-relative overflow-hidden" style="padding-bottom:65px;">
            <h1 class="card-title" style="font-size:
                16px; line-height:16px; font-weight: 700; padding-bottom: 20px;">
                <!--${d.title.slice(0, 50)} --!>
                ${d.title}

            </h1>
            
            <p class="card-text d-flex justify-content-end "
                style="width:100%;">
                
            </p>
        </div>
    </div>
    </a>
</div>
`
  });

  // div.innerHTML = HtmlText;
  div2.innerHTML = HtmlText;
  // div3.innerHTML = HtmlText;
  // div4.innerHTML = HtmlText;
}

load();
