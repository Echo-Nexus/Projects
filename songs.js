const tracks = [
  {
    id: "1",
    title: "Summartime Sadness",
    artist: "Lana Del Rey",
    art: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.dropbox.com/scl/fi/07jui544x76bgdj5wzten/SpotiDownloader.com-Summertime-Sadness-Lana-Del-Rey.mp3?rlkey=7uexs3zlc3g7r35f9p6m2mqpc&st=aaambntt&raw=1",
  },
  // {
  //   id: "1",
  //   title: "My Love Is Science ",
  //   artist: "Arix Ratgaiya",
  //   art: "https://plus.unsplash.com/premium_photo-1681426558755-71090cebadff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   url: "https://www.dropbox.com/scl/fi/vmlxz8gzvxb9ssy4og05r/I-will-not-stop.mp3?rlkey=j8x3qex71vai74xfdqjnvcuit&st=zc4ii9ts&raw=1",
  // },

  {
    id: "2",
    title: "Quantum World",
    artist: "Arix Ratgaiya",
    art: "https://cdn.mos.cms.futurecdn.net/aBSs4o7eAJupCvRQGcvgET-970-80.jpg.webp",
    url: "https://www.dropbox.com/scl/fi/sbh8qyl87zdr2yzx6lhws/Quantum-World.mp3?rlkey=sfa420unvprfy1hg2vm6eng0j&raw=1",
  },

  {
    id: "3",
    title: "Classical Mechanics ko Rhythm",
    artist: "Arix Ratgaiya",
    art: "https://plus.unsplash.com/premium_photo-1676142919286-1e166b18ba87?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.dropbox.com/scl/fi/pzjgo3kaf0ii5hfv9rt79/Classical-Mechanics-ko-Rhythm.mp3?rlkey=c8rj96fucz38fscwyprtsdlvl&raw=1",
  },

  {
    id: "4",
    title: "My Family",
    artist: "Arix Ratgaiya",
    art: "https://plus.unsplash.com/premium_vector-1682299023441-3034e6485a4b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.dropbox.com/scl/fi/5cglgoutfca44bpq2p6iw/My-family.mp3?rlkey=u2ttzwxsrbgslm64jrrucjaza&st=i34eu8o5&raw=1",
  },

  {
    id: "5",
    title: "Parkha Na",
    artist: "Sushant KC",
    art: "https://i.ytimg.com/vi/qQujA8u1zGI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLApTuClQ_oYNnmGfpbOOAKYgs_TkA",
    url: "https://www.dropbox.com/scl/fi/ce6qgdcqlrzmeavlejb65/Parkha-Na.mp3?rlkey=xz22vdcnn2ijdql1rx1qhe26b&st=v4v7j1cb&raw=1",
  },

  {
    id: "6",
    title: "Oh-Na-Na",
    artist: "Sushant KC",
    art: "https://i.scdn.co/image/ab67616d00001e02a9cc8ad94cfd2abd2eba814e",
    url: "https://www.dropbox.com/scl/fi/1x0rgyw8zuzss0w7fbvnl/Oh-Na-Na-Nepali-Version.mp3?rlkey=iiu40ul2dcu6c8wtngs4lr5zd&st=goqvnhcs&raw=1",
  },

  {
    id: "7",
    title: "Bhayena",
    artist: "Sushant KC",
    art: "https://i.ytimg.com/vi/0OjmQhBLWt4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBnhyWGDQIM8iLitmbkkljMGvVDCA",
    url: "https://www.dropbox.com/scl/fi/lsepv3v0h0yzodesbpe1v/Sushant-KC-Bhayena-Official-Lyric-Video.mp3?rlkey=kjj1pmtlj8uh7bmwdadpdm9sx&raw=1",
  },

  {
    id: "8",
    title: "Laijanay Ho Ki",
    artist: "Yankee Yolmo",
    art: "https://i.ytimg.com/vi/oPsgIvkBuLQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCxSSrFA821-A0av44korTKoHIONA",
    url: "https://www.dropbox.com/scl/fi/v7nujv9dhzmegcta9l5pi/Laijanay-Ho-Ki-Yankee-Yolmo-Official-Video.mp3?rlkey=wr3kqztdmc4qspzundp7isadp&raw=1",
  },

  {
    id: "9",
    title: "Sahiba",
    artist: "Aditya Rikhari",
    art: "https://i.ytimg.com/vi/n2dVFdqMYGA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCciMXK3vRaiYZMhzYIOsyQk1YEMw",
    url: "https://www.dropbox.com/scl/fi/vmbmink0ucy5ym6o71srf/Sahiba-Music-Video-Jasleen-Royal-Vijay-Deverakonda-Radhika-Madan-Stebin-PriyaAditya-Sudhanshu.mp3?rlkey=wn7jom9dzslm0a6llsjrgt6ir&raw=1",
  },

  {
    id: "10",
    title: "Finding Her",
    artist: "Sushant KC",
    art: "https://i.ytimg.com/vi/3Cp2QTBZAFQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbm4ruMwnmr_mkHXOlZP90jrOb0Q",
    url: "https://www.dropbox.com/scl/fi/3s0numy5c0n2t13ndby8a/Finding-Her.mp3?rlkey=fe8nuc28vcv4132wy9dcbyz88&raw=1",
  },

  {
    id: "11",
    title: "ARZ KIYA HAI",
    artist: "Anuv Jain",
    art: "https://i.ytimg.com/vi/jKqCewZvECA/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBlKGUwDw==&rs=AOn4CLABJuYkmegmitb8sjtt8vKjMXqFfQ",
    url: "https://www.dropbox.com/scl/fi/pgbtil2ilg9sjz9hwgpn4/ARZ-KIYA-HAI-Anuv-Jain-Lyrics-With-Translation-Coke-Studio-Anuv-Jain-New-Song.mp3?rlkey=3ujhh2d8vywq843s7pl8da4c2&raw=1",
  },

  {
    id: "12",
    title: "Tera Nasha",
    artist: "Unknown",
    art: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVCo74Lsb0x3FZgrATLfm3w3nb63HUDScrg&s",
    url: "https://www.dropbox.com/scl/fi/i5gj5n34ulycc3gaf8irk/Tera-Nasha.mp3?rlkey=vdlq52sca97aokw23clfeqavi&raw=1",
  },

  {
    id: "13",
    title: "Heat Waves",
    artist: "Glass Animals",
    art: "https://i.ytimg.com/vi/mRD0-GxqHVo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAkyJxlmxQdtrcGYINscfIZ-A0_OA",
    url: "https://www.dropbox.com/scl/fi/8azzewzzfphxkhho57i83/Heat-Waves.mp3?rlkey=5ao2m9jn3cly1gaa8sgg8ca2p&raw=1",
  },

  {
    id: "14",
    title: "Shape of You",
    artist: "Ed Sheeran",
    art: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyNhDKz_FSbd7MP8gOwFKaWOeSSQ",
    url: "https://www.dropbox.com/scl/fi/m1nc33gujrcaidqdefxw5/Ed-Sheeran-Shape-of-You-Official-Music-Video.mp3?rlkey=6r2hfe49v2emm37ccdgqf8cp3&raw=1",
  },

  {
    id: "15",
    title: "Dandelion",
    artist: "Ruth B.",
    art: "https://i.ytimg.com/vi/W8a4sUabCUo/maxresdefault.jpg",
    url: "https://www.dropbox.com/scl/fi/ifzz0ry871m88zf612xs8/SpotiDownloader.com-Dandelions-Ruth-B..mp3?rlkey=vr4l8e8haepv9lzj5fs3ctvag&st=whgnta1y&raw=1",
  },

  {
    id: "16",
    title: "JavaScript DSA",
    artist: "Arix Ratgaiya",
    art: "https://media.istockphoto.com/id/614225844/photo/programming-concept.jpg?s=2048x2048&w=is&k=20&c=U8V3QxZSJtARZWqBQmjg_NiJUs-bCG_3cA8PlDS2GIc=",
    url: "https://www.dropbox.com/scl/fi/ir2i5ilhp53ll7ib17qrb/_JavaScript_DSA_-_-_.m4a?rlkey=ob357drd9qwjbatsolom9oauz&st=i4ekyuug&raw=1",
  },

  {
    id: "17",
    title: "VESPR Theory & Lewis Structure",
    artist: "Arix Ratgaiya",
    art: "https://plus.unsplash.com/premium_vector-1722924735259-1c3369ee89b1?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.dropbox.com/scl/fi/n9jod27f8vdchkclk0m6v/_-_VSEPR_-_-D_.m4a?rlkey=hcsrnqg75hznwmp1xzvbozk6n&st=2bs5dwo3&raw=1",
  },
  {
    id:18,
    title:"Rich Dad Poor Dad",
    artist:"Robert.T Kiyosaki",
    art:"https://images.blinkist.io/images/books/528232a7333464000c300000/1_1/470.jpg",
    url:"https://www.dropbox.com/scl/fi/scew41l3vvshxvflb0a02/RICH_DAD_POOR_DAD.mp3?rlkey=yk69beg6pj8cd7mzm6lj51xlz&st=znhm12n2&raw=1",
  },
];
