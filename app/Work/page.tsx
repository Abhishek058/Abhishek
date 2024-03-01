"use client";

import HomeContact from "@/components/Contact/HomeContact";
import Nav from "@/components/OneTimeComponent/MagneticButton";
import NavBar from "@/components/OneTimeComponent/NavBar";
import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-200">
      <NavBar font="font-medium" />
      <div className="w-full flex items-center justify-center my-20">
        <div className="w-1/2 border-2"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-center">
            Creating next level digital Projects
          </h1>
          <p className="p-2">Have a look</p>
          <p className="mt-10 text-4xl font-bold animate-bounce">↓</p>
        </div>
        <div className="w-1/2 border-2"></div>
      </div>
      <div className="flex flex-col items-center gap-y-20 p-6">
        <ProjectCard
          title="Gourmet Enclave"
          description="
          Indulge in culinary excellence at Gourmet Enclave. Elevate your dining experience with seamless online reservation services, savoring exquisite flavors in an ambiance that echoes luxury and taste. Bon appétit! 🍴😋"
          image="https://lh3.googleusercontent.com/pw/AP1GczPNCrHAmoK7m-aa4lEAEm5RJlkt9niASfzQ4lYPvDr1jUXSc7beKhk8dnrZ8Xy3wNlZYF3b-xySepVOIBMaRzwOGi_iUI0_p5-zQOfIOWbPeNWd4-Si_mHvCrytiY-3YMCVfwE5w92tGUt3lEOj4TxIKYzKmIanulVKPuVDP6sE3mIz2KDUhrIr2hacejBizVfLfjCW5r5b-3x5CRiGsHxHSeZW8-cBdqM-tswreVt1fu0iLdItPh_3bShVgctJwumgdNIZYMvSUDkRCi2qx6sA4fteLQCfdU9l51-aYrvgDVDU8TH9Vfx2b_4yOd63TZWPwwUuMX5fN2fA193aWmJXaKSRuQX_pQQDl9YPTfpG_GjMTYHc6x40EEehU_OekpPYkSFMQtyXO6IM75PZFlqzAFvpKZWYhJ2PWENAUTRkFxtbAxQ8tsRlWiKdVvJ4qcNoqd5LU808ewQ6hZ7DAGYiTGr9f5S7ARMFAeVzG7q3fBkrolke8GTnctOX-eMdZhyEcUzOEQ0TeHmtJlMDetTtzgthKIgBVoEzMSTZd-xw2DAKgxFA11JgbGtKOi8GxrSDoGAEa3MyVjemfMBvui6ApkVNkRbVG1MayUMp859vekESMIjXUQPCZOvgFwkOBg88EggYa2zFkvK6FtuYZDY5JKUz2XgCKzx1IK0rSO_ZSAv3nLYP3OdCwkApLJvHJTfrX-Ol8FuqJLZVZz_DXMjUusCKhKCl9wiuWsQB_VOK6siNAetdiqAciIqRcKFDZHNHvvR-J-ZXTOCY48eipp2pZbF4su-pBBEPM0DKZUxfd5z-azccrmvYOpUALcMmv2d_er1qoK1J0KmMYvSs1QtATeRyMTits6uT9_hGfJFe8wV6gZyfWesYtrMLN4YOU18rvCeIkGvehs1-b146ztyykJcrvJvLMQm8va3bWcYTEGVy-NswsGLVf_Df7oHG4ulgV5oo3MBPEzQ3wKkFe7Jr_qXTL2XH5l8MKQi0BdqOzRTwMnPCV4q12V_BIjlvbAs=w2516-h1572-s-no-gm?authuser=3"
          trylink="https://gourmetenclave.netlify.app/"
          githublink="https://github.com/Abhishek058/Gourmet_Enclave"
        />
        <ProjectCard
          title="HiLink"
          description="We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app 🏔️"
          image="https://lh3.googleusercontent.com/pw/AP1GczPEpDY-0QqSJuAdZD-zCgnmej9UOllrgVljh5vkutYXM3ILwpBSXMAelqFw9xnZAkYU4Cp0EOdG0D1WkvP6lhpifluezHj0EkA_gDEA5JKzUu0cMlm9dsRrBALroEq0Q2Kueu4yY10S0Jf8MXAf7KyyNdGmcz_uD8bR-XmQs64mJszB2CtFuKYm8Y2ffa7m4NT38baPCpazP8Acgbm5jZJCxJB7Lg9a2WpQnXfay2V_1xARkWjEYs_zimiT24-5RddT-_Ug1CzmeeZTaHkLiQLu8VLxnguqRaCGLlFx6ESFBM9T_sTvxnSfoUvrvBMab7mgFTCbDLyU1dkXbFgtCiBlxq6AEK7Ic2Qp3iCnsoOLZRpdfuJYYu6a15U9FhzjlmNacjkCLc3ZP2FrqVRH4LUxi4IQ4wZ_hugITRRgHQRpdyrvcyaG2yS6SS_iFjS0gyq04jkWWHMWmv4MoDJbNNoGIAakZaKGvks3PJaDFZ1xZibYbTmkleGd2PAXckcsvCLdBSM5NVdXzcxfoxRy_zlM7EUs-c0Tpw7H2kzhtney5G_1lJkGJWwfLMQ97cKknMf28E19Zf3RVe26I-oPGHsi7YUlMmwed2mRb5N06z63N8PTy5kVbA4mR3GQT0WIXCu-koK2iKybE8G2OhvHsBUDqHYMbcF8TJZ-Ysb8b9EP46sUPcoqMvZL42TKxwjtnlTuVh8tDD5knPqmkY7HJAlGdvmgYBIYZwzu4dTa9hspXz6pVxpylEwW0EwX3PI1V6f23ke__TjobgpKJuho7wlWL62jJMvKkpCPByXu8RF6NBJ2Tpg9woyN46tiL3KsttCF6H6vDrAyT3HEksK350RlQ1Yd7dVR7Tdy4BKTdFDYccUPtTE8WM50d1qtyThk_243AEBVra0wiwANTL4qxZHx1U0Wx31r6Tv1qSWTyeT4B3H1cDuCNmYUbOX21M8oioRTlK7lilcnLCL9qqEP42FzgsAdfOw=w2516-h1572-s-no-gm?authuser=3"
          trylink="https://github.com/Abhishek058/Camp-Travel"
          githublink="https://github.com/Abhishek058/Camp-Travel"
        />
        <ProjectCard
          title="Chitkara University Website"
          description="Experience Chitkara University's digital hub, showcasing academic excellence, innovation, and community engagement. Explore diverse programs, research, and resources in a dynamic online environment. Empowering learning, leadership, and success. 🎓"
          image="https://lh3.googleusercontent.com/pw/AP1GczNj0F-_c_sRzeLhCxB7P5p-UMOllTiQIo4dz_X9raYFu86tcole5Ed0JcWbmpSoS1B1NJBmqcslkY0hBnTxMUEcg4MmIrP7S9P3dYt-kfYsK2clIlMiCATY1M15hRExQEn09YtmSZ6E_vys46F694ZYFLt9QQFUjZUncM3ql0grxCol6doTMDmVTcwUUbDywDWAdMGU15XRbA4UJiHV4hzB2ih5yBvnthELCHgHOKgvy7TUagwFZyjGBitH3Zs88kt4gdJmP84yscNsMTdL1c3zO0LpeTnBl8OijTX2IXLUB53aZQlj-7fku3BAZk0t6KSgPJ8kn5HzVkZqNBOwEVa8zCcG3fehs0jnalvLNJRWvheDu6IHt6lBa1PgrOUCvgOAenUPgRsq2iOsMGIg9st9IZ24Qdi0dr7L0RgirGr-0CGG92VVWCwArnFe6SbFT5pVElU8rUyxHCQTBmnuwj5AS4EW1OJ4nWu-b_PH1pKUeuuuaPKkbhXvVQ_NcKUsRoEntBEYYEjL-yUL11UIAdamf7JzduWBTHi1tWIuOB-M2rMMMQQ8YUjfF-vWXeoAfuxJY0RJrPcvXQNTC6EWiGo2NijB6sgzFf-Lz2wdz5kLqHt4rykHoZBYyHbHP2ma5MYnrsgwXgrIIyJJArAnjZss8Y670cT-pFKp4qYPy4JQVtOOrt4PgI4qDP-fpyBSV2YZXYEuBYbvXZ0DiT5l4sAjQnt9EctNGC023GVLfVv9FskZktIpfAIImEsgzuh_wMm3w3MegPq_4w47kOATn04S1zjxjMzJRkSRYWZ3zDk6OJ0WFi-gDakSfKrXaMdetxVV2XlShAVDvdp8DlZfD6gHoBkYzV8zfzFJxHl47AhOun1P75XBV-5DNh0PlvoUkeXC4W_A_W9oKYaStp2zn5CUeIguqyjOXb3OcDOS-R2PLvlUJbVRoX-Wb8slhVF0bDQZXwtVUIKz_Osv_se-8TNzACg2yDk=w1366-h768-s-no-gm?authuser=3"
          trylink="https://github.com/Abhishek058/Chitkara_University"
          githublink="https://github.com/Abhishek058/Chitkara_University"
        />
        <ProjectCard
          title="U-Mess"
          description="U_Mess: Your ultimate real-time meal companion! Discover daily menus, track dietary preferences, and never miss a delicious meal at your campus mess. 🥗"
          image="https://lh3.googleusercontent.com/pw/AP1GczM8mwLACsUqmyFPWXsUToRS0aMroFBA1px6JLhlDQ1zrA6baU48QmJnsHFRKTc9_Xp6wTWOV0_AiomUJ8gfU4fYg_mFO1U4VwBF2M3MRfDI1xWjpx0ydsUJ_2v7e_qte4fYa5qFsOiLdXNzbm6zYSw5wFlCeVRdRe5gwfpttBh6DtS-hmCDKsVML0v0_3kIpaW9iQn1PZ9LXqqxecUuwA06wBk021wwit2hdqS_72Oq1lpBHu0d3BeHExvKiS78FoWTcBYMqXicRUQxDAM0opbji8085iiG0VnDOOPXKZnM3mIKeJSE9pix44FPh3SIZNngxOgd9xo0H4jMtk05uY7DM_W5iuznNK8M1crUxcR1v1zsz-0geedoMg5f6Ntf7XRuNwCpb2ErptoL7hyS7AViFl61P9iszSAeUJAZ5_CoBcLYpXj3tb431bB866ZxJt8vDEp11is_kdoVrsVX-Zy0wfcmUHiMeYIzuLxiDoB3BUGiJ6QAl3cTrqyUiuJETBAstS70OIiQCHjCbGsfeyfpS1Edc9ZrBi_fxu04Jv2cjTKu-tQzOSGwdTmLK6vF6gUguhu8h4H0kxm2ct6BglEAUVc-4zw2yE5vLPJMcTeHyKHdRU4HP0t0VAQD0AGUqoY5mO97msWSH6nykD-Z6R95H3GncboLeMFRTK0xQLrektpgwOddKuKsm3763S4dB7EgGXH1dOuZbY1NptPhO6A0nCAQs_EVmI0ooznUe1BUfUEmWnAkhdKWq5cxA0Ktp7bjjnkGUZ-ky11mcq7N-SwG_I2XfDqflOBDW_h89rRm5h95XuLDjvjUe8w1T4DJLUeAiL7PMyoINB0s_cZkLDbx3aR94M_pwSo_C3q0NgpUWKV6cs0TJFMPTnhKPmo2c9nk1NDAAWVgNsn2AjWRk8hV7UYWkkMP4dcVAxXm0jCcQZ9WYhxtlFpGAqjLt1wasc8uogKIVND8YPN5xjROrsfmwGIdrlZo=w2516-h1572-s-no-gm?authuser=3"
          trylink="https://abhishek-u-mess.netlify.app/"
          githublink="https://github.com/Abhishek058/U_MESS"
        />
        <ProjectCard
          title="Personalize-Tshirt"
          description="Many large corporations already use 3D graphics to showcase their products. ThreeJS 3D product website and infuse it with the power of artificial intelligence! 👕"
          image="https://lh3.googleusercontent.com/pw/AP1GczOKVCTMZoPelQCwJH9OXm2jsMt-0xd6lTQH1jxLWm2IxrvM_1wODGkWwX2XkjDUL8Hk8IFvmOnfMmLJ12Gxc0RcpZSgAeVPIuUWBFnDMHov9OfQQY7VilNIqF4oJn9lwRX2djTuKoJgbGYVV6Dol9qXiw0sK5nWH3k5-bmwZyCMunlPWFdxpHo8E6eY6wJslz8wBUomd-V4nmi4CknnHOTOR7oE6bLlpmkQnSRr3wQ0zpQxtuvN3tMc-WALOdD_mVQnBgU4a_HbZ59SOoho1RgGb1tULMxq4y08YLYXlfB_H-Hwsew32b2qJcXGfWLGhXZquGvhALlyZWqS5iiwsaDBW6IStZrSoH-2WHPIyf02YhmM0UMxffm2lrSCFE-lN2NYzNm2-Z4b43y8-JgHnGmL6VgMyIcjO6UQuDr4eNq47AMUq99g6QiI2a9RinLpAm0tO-MHPWeSnGMGsY4i0trnzIIkDI0iNkOMUUAdcpJ5uL8ZOaJA0Obv7F8T23CsuT0myynVzCFm2ASJnsXmzoYZb4_l-J8_NS0tM8lnVa4lSI-wz4RHi5Y6449RUjfWMMEfOjkL-4I6BeM6OE275mYDG0d9vJFWCFXGqCBvrXfoLXnjourB17kFrgsl637jm34h9cO8Hotxr2URUHKtuipg48yaDqhHVSiAcXjRlHWMqj62I-u34pwg-mhN6oMeWjjNuDU1rJSg3SGIoYgM3BnCNR8gIqWHWP2ARmlcSN_iakJMQdvxhy75i6lyHxO7TPVmTDNXrRpvt8gFRroVSfU3avTWq9SBDqTJFa-kSszZMLM3htj08qnfMkJMnSFllWWbc8_4oDd7boaKPdBHizVogf7Uc2hI2-OXp2NqzLb_fBTZwaj0rzdtFBMperu_0JI0vp0kZ_dnfgcj27eo8NNgRMvh2V4XRZkR-YzFUjn4qwc1ckTdfR-IZHUkw4t1LfrenG2JtSTXG4dg9qNkH00z-WZJ0aU=w2516-h1572-s-no-gm?authuser=3"
          trylink="https://github.com/Abhishek058/Personalize-Tshirt"
          githublink="https://github.com/Abhishek058/Personalize-Tshirt"
        />
        <ProjectCard
          title="Indi-Hospitality"
          description="Your trusted healthcare companion: Discover nearby hospitals, clinics, and healthcare facilities with ease using our intuitive Indihospitality. 🏥"
          image="https://lh3.googleusercontent.com/pw/AP1GczPim0AS1X5_Gr4giqCtJ1lFZgDeABaC8n3649ly6nxYnXUohqU1teWq8LXL18wUsHFrjF5hB-qrMbwEab0ICVLp2MXm14gQhCHPCB-0N0L1G2Qcdo07snTllsR2jzaG6qEq4DWcqXDFBxcTru2U2L9BEzGgvAdQgrRfdVbAlJhpj87lq4fblt0ST0OIG9grWrt1RA3GTw4vqovZHg__Keoa2XGkPhsVRzBD0uKLF8SjoNkHxy1J2Hqu4W6mZLmv1Hv0jiV0Vi2kJuGZoXv42CgjHfQkCI5JTQ4vDGK3pFOYnJ3QFOyifUUWWZJjAwzV87n3lpFCo9V9Bua4mbZNKGjEerrqFkxRCbPDaXiVMUAwYHYsPwIWzLCtdzeMpM_sZRlFZDG16GzIAhSAyFo783qQ4nHJYaxfRkuDUl5si_AYQAv0vF39kLuPRZvC8BhMRrwjlWxvss4kiX-hD-vLBlyIbmgRgF0-2QWUF3ntb7nBowZXN0M3ApcM-Hl9exOLeC1PHOGfetu7d0tXPCSjqHhViuzEhveVtYB91HWks8uaw9GTRFAn_fKs8RfiFX962rq4VHOJj2Qrl4V6bIxTX0JYNg5o7u7C9K8k58jPBW5aDIG2ps7zmFnttoSDhBrQFDAYezdbYT1My2AU-EgEUsjBmcRcnwEjwGxWh7iGUpUhTqlPNFjUJ-K4FZreWdUoPuirGXIGBWxb6sfxQpdqSVwzE5-iRfLDheE-Sx4ueLPGPaOTFa6QXQr8JQu7vk2Eb2N5IRZ4N89lm3XcsBIfBS9jX2CuimUMZMBKW_jB8ZHrtxpZ9AKtsXXYpVX4J1bri8ril4rVtdPOs8Yzp61f2Osy6uH2m-KblAOJmFT3139rx1fsVGOc-wOdI52lSXjSeaKrvnvjz6Fh2ahhmpY27IhlYqkrmPqCPivsgVjDNVZsfTtPmi4_8se8Lep7oE6Nl2lD6kg6WbsgWvAU6BvgJ1N8t-pRCho=w2516-h1572-s-no-gm?authuser=3"
          trylink="https://github.com/Abhishek058/Hospital_Finder"
          githublink="https://github.com/Abhishek058/Hospital_Finder"
        />
        <ProjectCard
          title="Google Docs Clone"
          description="Introducing our Google Docs clone: a user-friendly platform for collaborative document editing. Seamlessly share, edit, and collaborate on documents online with ease.📃"
          image="https://lh3.googleusercontent.com/pw/AP1GczO3m-qM1RC1I5D5SKV9C0c170GFPgdVmeW_9P591ERz9PQfxZN_U8hjZPYivRos8p3tjnnsMLOf5sIWhIa0FghS7hIZojybyDRwf0WQMEEy6yX7fjcfO0MpPekL18IZ4v3H353dqnRGgVR3zofRsUJz7-bfGfkroXqP7QqTBZmAtcxRkt4HRZ3FZiwDZBukvultZo7NzVfDNBSfK1THmR6yucvRIk3NTVSDmqxdRBnnemgTVxZ5u88lhJTfuEm7-lEXriuKgLFlp1xZENe6sWzbUA55tz0frc2ogSexdQFrbZl1qKoAqElVTbZFu92cgmyff6idkTM9fjlFJF3-P1qWzvylaXbrYBJ7aId-2JNglrv5xWxtsCqzy3BpnJCzkzJR6_JGqO9duWij2J0xaX6NMNjpKgcb5tK3C2rrSl2aX4cVxqBlw-KoNaT0NnHFcm9jSJ4q8pE8b6AGNF4Ng5vJy3dZoygQSnQpZ6sE5EmnRReXTcYDPACg43LeNjxd8uWggDqsg_re2p7DgepMlUL-MMjY7ZzvcaVnqfgQUMxmtCsnUVAL3LwdFoc-DmWpRJ0Ji0xodqlnntPx75PX2fXXMyfHwJwfyWjRbdLJWGtbU68QS0Ck98cvCvQNjqAcvugCk4AK1wgFMQRA9pGEaUrlFa3lfmtm2ZptKXQqaeq7TiVRhhufX6J9U6-o12FJLfeXV8pTZwrXeHEPrqTG-P9A572zimoRDDEQh7tEDljt9yeX33KCerJkKuEn9Jie8Z57l1b3ZKP9UHrS9e2MkfhBb95N3zctbnmzBMuoMhg4TqecjSaJBaqfHCodx9KrybpLBBA7YvGMuR8R_Cq27R1_sANCznhFDPZpMRWJ-czXxQa2wiV1Ft8hdMHAL_E79Ghina_xcQA6OJlpAK1Z1Xb_w4s2j2xpXLwsXnKA4ZoiEDbT997lVcfsDI-LKMLRull_RWHEi3bTL-i_nJS8_QZaZt577m9G=w2516-h1572-s-no-gm?authuser=3"
          trylink="https://google-docs-clone.vercel.app/"
          githublink="https://github.com/Abhishek058/Google_Docs_Clone"
        />
        <ProjectCard
          title="Dream Destiny"
          description="This application is designed to help travelers plan their trips efficiently. Whether you're going on a weekend getaway or a long vacation, the Travel Planner App is here to assist you in organizing your itinerary, finding places of interest, and keeping all your travel information in one place. 🌍"
          image="https://lh3.googleusercontent.com/pw/AP1GczM9IeJWVlbIf6WyVIdgYe-QCKGPmoLAMdxVldsNudzE4pf48Yw1hAg0eGb3AZ-9qzL5GOQXMYkS08vdcixTAYQ-Tvy8R5QB00CwceWE0_rHf-v0KVbpmWMP8f3fNVe31_3g6ZuGuT6aArUF9w4GmxAMDWQQg24VCIdylapTlF-6ag7u_gDsci-mcwgiP1gfAGBJ_LVi3NI-bf2dpY1tJTkkhBGjTAlk2KZw-r30OjzbRdygfdicq2MGCX8hvskxQT2PtrXKyQuQvCqPxhM_cqR8lW9kG0COVeOuBielu-MOcLKd9gL_63cJLA8_YbN3yeIIzUhlzFD8ZiON5nSBRfPx_g0Ad1H9eZJ0PD4haN62cf0gYR2k2ijWne6UROWXUGmIfGz_bsVdImNi-npm3i87-sZxi3iHNtRi9QF40T0DqFUt6YK62OFOywEQLql1d6S3SjU6upW1h_px8hD8xDUeUBpXeayzknlZyxRv3PXR0Lg4fklXRKcqUbdMi2y4kBGSrokibpaNeo9B1FUxrn3Xb_QbIDEPV7pHdqfMA0fDvwdPH3G8MgtjN5UNH_ldPTISh_NWzXqtEJ3E6JfgzTUOlN7c-O6jYVlYB1e1Vs4FNzyjbutRA8BPQ5vgKeLAW9l0aJwCrr3N7Oko-QCnKG8YyyMtsH4s8ReRh8s_3xqGu3_VhlpGGtGxT69rMmb_sW7pOucmdf8CY3ZpRSRhvFe14mD5WYkNdol9cAoD2JA259APLYl7j-o4VjbhdRCKl_kXP0Tb8_hyvwxT0zoI_d1Unw3AByB_Z5yIgD03hB5XpZsIlj-yvbtRPD4IgJpkt02FR2Z248WQNovDjzPqFC6lrwhz8Qdgijc5ZGSfWvRhC78505AIXzfIvjzpllKjBISEW0DufRM9-uOqn8W3gR8mnUqiO_fFyId0zp_fZd5KHpeTYVRcOIl5IFKwIDSbRBoUM5POMRy_gtDpecscChApcn-sfK4M2Lpcfrr9tbQSLwj_9trllBf_xzqfPrgJzt3z=w2816-h1572-s-no-gm?authuser=3"
          trylink="https://github.com/Abhishek058/Travel_Planner_DreamDestiny"
          githublink="https://github.com/Abhishek058/Travel_Planner_DreamDestiny"
        />
      </div>
      <HomeContact />
    </div>
  );
}
