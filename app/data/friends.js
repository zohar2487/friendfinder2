var friends = [
    {
        name : "Pope Francis",
        photo:
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.dailymail.co.uk%2F1s%2F2019%2F09%2F27%2F16%2F19016716-0-image-a-16_1569599185220.jpg&imgrefurl=https%3A%2F%2Fwww.dailymail.co.uk%2Fsciencetech%2Farticle-7512783%2FPope-Francis-warns-Silicon-Valley-careful-AI-does-not-lead-new-form-barbarism.html&docid=7tvO1Dy60xLOpM&tbnid=zzQvJMOhEJAyIM%3A&vet=10ahUKEwietra6gfXkAhXYvJ4KHc66AZwQMwh-KAEwAQ..i&w=634&h=423&bih=688&biw=1361&q=pope%20francis&ved=0ahUKEwietra6gfXkAhXYvJ4KHc66AZwQMwh-KAEwAQ&iact=mrc&uact=8",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 4]    
    },
    {
        name: "Sofia Vergara",
        photo: 
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fsofia-vergara.jpeg%3Fw%3D2575%26h%3D3600&imgrefurl=https%3A%2F%2Fpeople.com%2Ftv%2Fsofia-vergara-on-being-top-paid-tv-actress%2F&docid=5aPVzkLs2U2qzM&tbnid=cEGcaXjdCLqdTM%3A&vet=10ahUKEwi174Dbg_XkAhWUu54KHVgMDWcQMwiAASgGMAY..i&w=2575&h=3600&bih=688&biw=1361&q=sofia%20vergara&ved=0ahUKEwi174Dbg_XkAhWUu54KHVgMDWcQMwiAASgGMAY&iact=mrc&uact=8",
        scores: [4, 1, 5, 2, 2, 3, 1, 5, 4, 3]
    },
    {
        name: "Muhammad ali",
        photo:
         "https://www.google.com/imgres?imgurl=https%3A%2F%2Fboxrec.com%2Fmedia%2Fimages%2Fthumb%2F4%2F43%2FAli_480938006.jpg%2F200px-Ali_480938006.jpg&imgrefurl=https%3A%2F%2Fboxrec.com%2Fen%2Fproboxer%2F180&docid=6OoV-nhdCPqMtM&tbnid=Vz7JJUtpfIWo9M%3A&vet=10ahUKEwjNiqjAhPXkAhXGvZ4KHfXjBskQMwiGASgKMAo..i&w=200&h=250&bih=688&biw=1361&q=muhammad%20ali&ved=0ahUKEwjNiqjAhPXkAhXGvZ4KHfXjBskQMwiGASgKMAo&iact=mrc&uact=8",
        scores: [1, 3, 5, 2, 1, 2, 2, 4, 1, 5]
    },
    {
        name: "Salma Hayek",
        photo: 
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F70%2FSalma_Hayek_Cannes_2015_2_cropped.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSalma_Hayek&docid=oP12BZZ4tIf1BM&tbnid=5kKTXP61sSw7hM%3A&vet=10ahUKEwjD55aThfXkAhVBHjQIHS5HD8gQMwh7KAAwAA..i&w=552&h=709&bih=688&biw=1361&q=salma%20hayek&ved=0ahUKEwjD55aThfXkAhVBHjQIHS5HD8gQMwh7KAAwAA&iact=mrc&uact=8",
        scores: [5, 2, 4, 1, 2, 5, 4, 4, 2, 1]
    },
    {
        name: "Usain Bolt",
        photo: 
           "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6a%2FUsain_Bolt_after_200_m_final_Beijing_2015.jpg%2F220px-Usain_Bolt_after_200_m_final_Beijing_2015.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUsain_Bolt&docid=nPEBybsETAtrNM&tbnid=sxlQ0QRlbBGKvM%3A&vet=10ahUKEwilgs6ChvXkAhX1oFsKHZycAZ4QMwiBASgEMAQ..i&w=220&h=331&bih=688&biw=1361&q=usaine%20bolt&ved=0ahUKEwilgs6ChvXkAhX1oFsKHZycAZ4QMwiBASgEMAQ&iact=mrc&uact=8",
         scores: [1, 3, 2, 4, 5, 2, 1, 1, 4, 3]    
    },
    {
        name: "Hope Solo",
        photo: 
           "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Ft_share%2FMTQ1MTQwNzQ3MDc3NjkwODQ5%2Fhope-solo---mini-biography.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fathlete%2Fhope-solo&docid=dVU0VIoX1b4fqM&tbnid=2VJ81WGmOT78HM%3A&vet=10ahUKEwif0Z26hvXkAhWUvJ4KHddYCwMQMwiDASgIMAg..i&w=1200&h=675&bih=688&biw=1361&q=Hope%20solo&ved=0ahUKEwif0Z26hvXkAhWUvJ4KHddYCwMQMwiDASgIMAg&iact=mrc&uact=8",
         scores: [2, 1, 3, 5, 5, 3, 2, 2, 1, 3]    
    },
    {
        name: "Enrique Iglesias",
        photo: 
           "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmm.aiircdn.com%2F260%2F5d21b16b93bf1.jpg&imgrefurl=https%3A%2F%2Fwww.rockradio.gi%2Flocal%2Flocal-news%2Fenrique-iglesias-confirmed-as-headliner-for-gibraltar-calling-2019%2F&docid=EWauaUv1H6LqWM&tbnid=Esx8__QqeVjiQM%3A&vet=10ahUKEwi75PvlhvXkAhUoFzQIHU6eBzUQMwiJASgNMA0..i&w=1200&h=600&bih=688&biw=1361&q=enrique%20iglesias&ved=0ahUKEwi75PvlhvXkAhUoFzQIHU6eBzUQMwiJASgNMA0&iact=mrc&uact=8",
         scores: [1, 2, 3, 3, 2, 5, 5, 5, 1, 3]    
    },
    {
        name: "Carmen Electra",
        photo: 
           "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg1.nickiswift.com%2Fimg%2Fuploads%2F2017%2F02%2FCarmen-Electra-today-780x438_rev1.jpg&imgrefurl=https%3A%2F%2Fwww.nickiswift.com%2F40443%2Freal-reason-dont-hear-carmen-electra-anymore%2F&docid=zT7ohZkUJpqbNM&tbnid=SKr8AI4y6QrSkM%3A&vet=10ahUKEwjOr6-Sh_XkAhVDjp4KHTpxDRMQMwiHASgPMA8..i&w=780&h=438&bih=688&biw=1361&q=carmen%20electra&ved=0ahUKEwjOr6-Sh_XkAhVDjp4KHTpxDRMQMwiHASgPMA8&iact=mrc&uact=8",
         scores: [1, 2, 4, 4, 4, 5, 1, 1, 2, 4]    
    },
    module.exports = friends
];

