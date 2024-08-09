import React, { useEffect } from 'react';

function Blog() {
  useEffect(() => {
    document.body.style.backgroundImage = 'url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0AOIDASIAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAABAUAAwYCAQf/xAA/EAACAQMCBAMGAwYFBAIDAAABAgMABBESIQUxQVETImEGFDJxgZFCobEjUmLB0fAzcoKS4RVDU/EksiVjov/EABsBAAEFAQEAAAAAAAAAAAAAAAUCAwQGBwEA/8QANREAAQMCBAMGBQQCAwEAAAAAAQACAwQRBRIhMRNBUSIyYXGBsQahwdHwFFKR4RVCIzPxQ//aAAwDAQACEQMRAD8AwWWc7nJ6CjI4pJVCty22oi34a2sZz2JNNkt4YB5sZq0yTtGjUAlc8ktGnUpf7mmhde2kg5+W9WyXzELBbAySY0jHIfOhuJ3WkCKM+Z9tugp17P8ADSIEkdPM25YjemTUFjbc09SMLh4IS04VciQXUxLTdhyAPTFbHh/DGYRyS5HUCibSzhJ2Gcc+1PoYVUAkbdqr1biUwJiiO+6nOYL2CqitwqgKCBQN4oeXQDnRtn1ppcTLChCbMQQKFSCPZ3bfAYg9a9hNOGn9Q7fkkObyCGittZUdOpri6iSFQv4uec0ZJOqhhGMDNZ/jN+tnazzMctgrGCdy55VZ4c73XOyadYBYz2v4oq5tY2yE+LHWQ8h9KW8A4OLl7cXLlDKcg4yRncADvS5BJxXiRLEtHE5dyeTPmvpPs7wtQI7qQMAFbwwVwCc4ytVnHK50knBjOjUdwyma1vFkG6PtuHWtlEEhQjI8x5k/M0Q1moOJOeFbQGxs3LUw5Uwb3eCWa3lz4Top14y42DY26HlSq6vpI0uWBUCRtfIalwNKhTVYZFmkDN3E2t4o2XnKXbAC91nvaRYreaS2j+FXXO+dsBsZpKtncSwy3ZAS0jcRvM5GnWd9Ea5yzY3wKNllmkv7VY7eO6uGdRFDMhkSSWQ7alzy6/8AqmHGpuDTRywhpori2vbhWtrfBguJG0iSYu26g4KruTgchWu0kIoY46aNvmf69j9lRKiU1T3TPKlpw+wtOK2liIkumltGu1urkBWR/dzcRCJNWlQCASST9hSn3i3Xht5Y3ayzXT8S97BSRDCSIxG/iSLkkHf4cd817eXsnEpommEUUcMQhiWJdOIkAUKznzE46k0HHGJHCj4RnJ7CpkdMe9KddP5BPP12Cjul5MGmqvnuLviLxzXT5igTw7eJF0xxKMDRGo6bDuTQ0wMtzFbj4LMF5cfiuJBy/wBIwPpRUksdvHLMQNFugZV/ec7Iv1P6GqeHRYAMnmkctNKWJGtz5iCRv6VDrpGxR8Ngtf2TsDS92ZyOjhLjEccjeGuqQojMFHdtIOB86aw8GE1rdSidjNFbSXCLDGHhYxldUQlLZLgHJ0qQMYJzTNni4fcxSwSxQ2TWMcsNlAzEzSXdppJlTfbJLFmJOwA9A3vJiF93VbYpbxW5e2aQMyIgXSGLHAO5IXAJOTk71Xcznd1EbAbrt/dEtdJjkh02duLOOO/Eo8XKSiRoI1wF1Zd9ZJ1bfIO4vJLl7iXwLeF7va7e3Vw8+SHIYuzYBIBIGASK5RFUjqSPzzVTkDO+NzXQwBcLih2Ur5l2KnUP+a8aRXAbOAMl+64GTXssqHPy6Y3oJX0sSc6HZQw/hUhskfYfekyvDGlx5J+nhM8rY27lM7ZWONWxYl2HYt0+nL6UzRE0YHM5+9L4JFBBNHrIG+v/AKqvXzG5WjiMMaGN2CuUWgVQ0GpgBqbxGGo43OKlU/X86ldzFMmnB6/yUkSdI4wBjV3oSacASOx5ZNeW8M02AoOO5p7HwOD3SRp/idTjNFKjE4ad4jZ2nHoskho5qs3OgWe4RZJf3Aurg5jVsqOhwa2niFQkcYCRnCiguGcOW0hCc9zzou7jfwWO67ZU+oqYWFwud1aIMNyx2doVpLFIoYo+rEZNG6s1keFcZthaNJczqngZVySOnalnEPau/v2az4JC51ZUzAb4777Cqi6OWWQsA1QxzXB2Sy1k90JJ5EBU+H5SFOcfOrPFLAajnAwKyXB+H8R4e0095cPI8/mkTdgp75O+aJ9/4vxKR7bhFuyIpKS3t0pWNOh0KeZq6wGOKnbxLCwUWYGHV6ZcR4rZWEZa4lCn8CDzSOeyqN6w3tJNxy9sWvxZSw2cZKxhj+00tzlZa3PDvZq0tXNzdu15fHdprjzaT/Ap2FH3dujxyRyJlJEKsrDYqfSh8+LObpALDqhr6kgggaL5TwKxwkESrmedxk89z8u1fV41jsrW1tUCkx26IxbJKtksaxtnYx8I4k6sSY5Q3uDHkM7tGT+8OnpWh94LL3O9VCV7w423Kv1JLFUQte09kfmqunl+JnYs2BuTk1nuJT6gAGwMknt23o+aQnON/wBKT3cTFZJH+FVLH5DejWEYZUxTNqn9m3I7n7e6E4njdLkdTRdonpsPXn7JE11KLiZ0dkYho9SEq2gjSRkb4IrnUMUMSxcLglmYLHpBJJY4CYH2H94e2Ps9eT4e8cwRn/tJhpz823UfnWhVGNUVFDxql4b4cz5AalVuKCSoNoxdKV8SWRIYkeSVzhEjUs7fIDetRYezlyUT3pvBX4mjjIaZj/E26j86f8K4VaWcZ8CFI9flLDd3A6u7eY/emyxAYFZpi3x5NUXZQNyN/ce96DYfMo7T4Wxmspufks9ccB4VPa+6tbhEV1lSSMnxllUYD6zkn1ByD+mXu+H3nC5FWYa4XJEM6AhJP4SOYb0+xPOvpLRA0JPbRyJJFLGskUi6ZEkGpHXswNVmgx+qp5LyuL2ne5ufMIhJTMeLNFljDfz3Qi8eQssSLFCgAWOKNQAFjRdgKIiePzZ7A1zxPgstgHurVmezXBkV2zLb5IUZJ5rkgA8x17lHPxW2tQQ8mqQDHhxYZ/qeQ+9aLS1kNVHxIjohUjHMNnJtJOF5HfcUtu+IW9vnxpQG6IvmkP8ApH88VnbzjtzJqCMIUOfLGcyH5v8A0xSgyzzMQikknJI3PzJNOSVDW7LliU6u+NytkQgRL0Y+aUj9B9qULfXKTCWN38Q/ExJJYdjXcXD5X3kJzzKrufqaMisScJFGSTjZQSfqaHST59CkipbC4OYdQm3DOPQSBYbj9m45MM6cdiOYrSRzghSrBgeRByCPQjasPNwqcL4mNMg3Gk+YfPFc2vE7/hz6ZMmPO+QSh+a9PpUUtv3VaqDHmyWZP/K+g+N6ipWaHtFZkKSjZIGcSx4+md6lJylH/wBZB+8LX8Nsg7qNICqcnamlwPFdYox5E225Zqq2YQQqM/tJWwOhx1ohJo49QC7qdv60jBaMa1JFydrqswsI1sr0ghhSPWvmGCfWsz7VcVjtonijbBIOP4Rjc02vL0rG8sr4WNSe2OtfLeM3snEbxowchmy3ovQVaAMgznf6p9x4Tc7t1RZtPO7yOzmJmyIwTggV9d4Pw62htrYQwLF4iISCN8kfiNZL2X9npLm4t3lAFvEqSvkcznKp/Wvpx8KDACLkgbAcugpBDWCw7x3QrxO6GWxDMdeNip+Yo1Y0UAKoA7AY/Su4UcrliMqAWPYdqI0Kg1A55fEQNIxneg07zI7wVdqnGoffkEMU8pdjhdwOpLDpiheIt51U8xFGN/lmiZ5hpXuGZyeQyfSs5xy/eGCRjJ+1lyiMT8KgeZ/kBUR5AFghNRI1jS0eCyHtHfyT3ENrbOQ7S6IWXmgjYNJN9OQp9ZM9xbxSMpBII9Gwcah86yvC7ebiV1JdBW0SkQwHScR2yH4yeXm3P2rf2tmHjkVSI4YIC2tjhBggKCdz+VHaCmZDHxXjVRc8wb+naT1I8f6QZjFBcQhl91ZxDIYWOlpNJ8Mb4xn509WO2jjtJQnjST3jW/7UfsgFKAsqjc89s/alXEZ1E3tBbytIhZoLexhVS3kilLIiKDpGdvv1orxdbAfl7FNiCzczj+WJH8oC04WJb2yu3UeHb2Ns64UKpuJA2MADGw3+orRRQDYeuPvXkMYjigiAI8KOOPcgnygDcgD9KZW8KjDyZPIhRtz5Fj/xWK4tVuxSsc5p7DdB0A6+p1Wj0kP6eEA7nU+a7VQiqo5AYrsD7VaEVnDKAEDIDqPXbYdajFFZtIyQ5yWAxz6LUT9KWtL3OFr28/EJ/NyXnhHSjA7MDknAAwcUPKBg0S8hZUzzXVkn13oOV0GpnOERWdz2VRk12fhAjhbWHtr8/NdZfms37U8QjsOG3RbSdMRkZW3DySAxQxkfUsfT5V8aT3mbyJnYDJG33Naz264o1zdxWQI8h97uQOkki4jj/wBK/wD2pbwuyIiQkeaTznPQEZAq4YPF+mpeId3a+nL7oPXVIjGc+iDt+F6iDIdR54Gy/wBad2fB5plUwQ+QEZbZUAzpzk7VqOH8HsxHbzMjSNKispmGlR8lG36010YXQAAF5AAAAc8CiJkLlXZap8neKzsPAYUIM7FzgHw49l2PInn+lFe6RJGViRVVcZVBjbuabsmAGIwPX71wlnNcNII1GhdLO7nRGoOceY7ZPSuAkpljnE2CQy2cuEcxuFkbSjMCAzc8Amk99w9DuwGGLDUoJ3U4IIPatqwefh1zrLNJbTI+WJLFDvzPzP2pHdgvh3OT1zinL2sp1w2xB3F1kjwGUklUQqdwQ64I7jJqU4OjJ3POpT+R6kcV3VauW8SaYeHkKgwDXk/ErWzjLzyAbbDPmJ9BQc0NwgKodEhXAyM0pi9neKXlzm6lymc6yckj0FWWGjbC0Rx90KxR4k1kVnDtIfiHHLziTe720REROAMEs3qcUq4XbaLxfeAS5lIZR8RY5AAzX0Wz4LY8PQCKMeJjzOwyxPzpR7vb2XH4nkjUrdAtEzDZZPSpbqdhZmG4UIVr5pAH7LZcNiNraRQjY4DSdTqx3o6F0aVQWyR5h64oK3WeYeQHH7xyB9KINuYtMgJZ13yf0Aqu1dXFE0sBu49FNlgkkicGaGycIyBHJxk4AB64qqVxknvVKSZAI6jPyFZ7i/tXwfh2tBILm5X/ALNuwKqf/wBknIfTNCA8nQKlOlcRktsnU0i4PyJJPIDua+a+0V+3ELpbSFjpnLR5BwUtIz53+bHYfP0qi74z7Se0DNHArJa5wVgzHAB/HIdyfr9K5t+HXEF9ALiUSNdLHE0ucCMRAnwlz3GSO5qZTUbpHhz9kh1LKG8Yjbl+dN1sfZ+3Frwu6nKA+JPBHbI4yiqiMdejl/6FPbh4Eub1JSVWa1t0HgBD5vI7bA4GcH+lKff4re1W2yiRAhtCKDI5Awueu3IcqVXXEpArtGPDRcnJ3c9t+maLTTRQkl516D0+yK4bgtfiAaIWWb+52g538TvyTG+vmjtxbpoQRszpggzanO8hYnUB2xgUt4XEJrkzPulvgj1mbl9uf2rOG4lSQTk6nJYvqJw4bmrHnv8A3yp1ZcRgjSOGMbSCSWNmO8mCNYOPxJkBvTB5HYHimKvNDIyFtnHT0O58+Xz5I7P8HPoKmKZ787BvpazhsLa6LXxhCy53GpNXyyKaiKUa/Luzl8nZcHluazdhceMyqTtkM3yG5pjc8YtIAyhmmdCBoiOVU+rny/bNUPDqOSpvBHGXG4OnrueW+5U6oe2LtPdZMzgHCnOCMHHM7HYVRLdWsUixyzxrLIwAQnLZPVscvris5Nxe/nOAwhjyPJDkE/5n+I/lQcjfGSN8Db6Vd6L4Jkk7VY/KD/q3X5n+/NBZcUaNIhfzWwlfTmkfGb6G0s5pJTiNY3uJt9zDFvp+bHAHyoaz4ox0W1w3LCxSN26K5/Q1jvbrixaKGxjODdMJ5R1W3iJWJT/mOWPyqsVfw/UUdaKWUaE6HkR1/rqp7KpssWZu6xytPxTiMk0x1PPM9xN2AJyQPToK2vDbPxpY4sfHzx0QbsazfBbbEbTMPNKcL30g/wAzX0f2ZsYXctP4imbMUGjTjygszNnfnjHyqxy6uEbdgqpWvM84iby09UdkaY1AC6QuAPRdAwKvjhVhNNK/hwoyqz41u7sCdCLkZPfeirS4YXMFukUYgkl8JoyiszZ21O2Mk96tV4/Ckt4p4oZYbmZ4mmA80bEjyMQcGltaN7ppkLXdq99/5+X0QcsCR2yXUJkVlcKqXcceptsB1UjBAz2rjijNILBx/hzwayBsDIcAk+uMD6V5cLbqsitM1zcuQTIhcRxjmcFvMxPfkKrub6aS3SFAscSAYRNhpUg4y2WO/rXiQLheMjQHM2uBt1BVFp4Ki+8eRFini8PSDqdmIOCFx89yRWevmiUSpGWZQcIWVQ56ebBx+dHzuRnf02/4pHcyanI6DBP+blT1LEaiRsQ5ldieXNDbbIfy9qleYNStDEcQFgFJWrizcS6jnsM7mtBbWY8OFgfi0llPPBONqD4VEkUXjsF/xCAx54A5AUx97jR3ZU1L5cZ2OQKGSucTkjGymNA3cvL0W8UajCrpZ2Zz8Xhjq1Ya2Fxx7jsTRZEEMgMZIyEijOSx9TR3tLxJhGtlG58a680xzusXb61oPZLg/udis8gCz3eGII+CIfCM/rQvFap1NAIGHtO9kQoIg+Qyu7rfdaCOJVA9K6kiLIzafKOZ6UQqKi6jvoYhu2Ry2rid40ikBbmFJYbjA3NU4R2GqMcUl2ixPtJZ8Zu4VgsL1o183iW5PhxyKTzLqNX0O1J7D2QtYgsl+5upefhgFYAf8vM/X7Vr3JldnPU7DsOgrkndVAOSQBjckk8gKs1NTiJgvugcrIjK57Ba6Xm2iRCiKqIinCqAAoHQAbUquIULbqDpdWGroy7gj1FOrtGiEviFY5QVVYm3kbVhtRwcAYI58+3ZTIcs2/LJ/lSKyYgZGlWfAaBspM8rbjYX90LgrkncnB3oW8njVYUJBdmLlRzwBgUWxLMqIGd2wFWNWZjjsqgn8q4tGkNn7YeLEqtHbW0eJIkE8btdpFo1sNY2ByM86Ebq8F4jbmt0+ZA+qQuGfUcdDnFVxmRQ6eY+dHiKnDR3C7LIhII7hhjcHB9CjspzjdBt136DNE2ttqkZtI0wgMc8y59P75UVwegbWz2kF2N1P0CDfE+Iijoy1vefoPqfT3IRsJuWHmbC7alXIXp0ovJLD5jtjP0rgDCt8x8vyruIK2k5yNQG3p61oEUENOzJC0NHQCyxuSR0hzPNyrMHV9qt8LXqxyA/kajJueQGFA9T6CmFrwy/uQphEaJJqVGnkEXisp3EY3Y/bH8mpJWxi7jZeYwk2AukcsJG4rO8d4HJxFhd25b3tVjSVCSRPGvlBT+MDp1+fx7aaFldoZFKSRFkdTg4ZfKQKEFvqYAcycV6aOKriySeh6Jxj3RG4WSsICAiovLw4Yx0y3lAPy51v+GlYZeHKnKOSNBtufwkn1rPcRexsL6Lx9MRGFdzspupR8T/AE2J+vrTG2upYmDI7I2CMqcHB5gEVndXSmllyn/1QWAtdnPVaGdzZyzrHb+FK5k0ys7O2hiRlAxwM0uY4UEbYx9jXCu0m6gsTjJ579yTVghcga2AHZdz9ztQ6Wdje8VOZRVNa68TDb0A+ioLgZJ6/wAt65WKWVSApVSSAWGAM7/PFGMsa6dI8w/E25+5qssd9+frih767kwKwUnw0B2qh/oPv/SXS2kJQiSRwxBw0YHlPcqeY+orL3sM9rJplAw5LRyIcxyKOqNj7jmOorXThipApROoKvHKiyQvjXG+cEjkwI3DDoQc/oZeGYs6km4kguPbyRafA4HMtAMpHz80i8Qbb/pUok8MtMnF5dKMnCm2jcgdiwlUH56R8hUq8D4go/3/ACKBf4iq/Z81sIpyUiU6QseQoAxz3NdGZmLLEjyuFZvDiGW2Gd+goiy4JPJg3Umhf/HEdz/mf+laG3tLe3TRDGiL1Cjn6k86E13xJT0920wznry/v81XoqJ79ZDZfMuC2VxxnjM094jBIpPFnVvwhT5Iq+qoViSIY8yKpA6AHfFZizQWXFuI22ABMFuE25lTob+VPjMoBZ2G/U9arhr5K55nI7R5dPAI+KdsUbWN2V5bY77E6sdM0vu5HdkgjBZ3IJVQST2AAobiHGYLGFrh4pZIUI8Qx41Kp21BTz3x1qjhV9BeSQ3iSq0Lq84kLBMgKcAat85wAMUUpaCZrhLM2w5KFNUR5S2M3KOgtCzxiVsK4JzGVbBBKkEnbIwdt/5jhntraKLWXhkaKTdoY3cO0W0ylW143IAJH5Zqt7uRQscR8OMYCaSDIo3BPiYzk75+dK5jkPjkATnuCcUWdcAucocMTppGxs3Oi4mKyvHFHkRJkIXA1kHzFm5b8vyHTehbe1WMXF49yI5luWgW2i1krFqXxJHIIC6hgADPXYc6JZCWYA9TyOB2ouO/eztgI+IyzCS0eNbFA4hiluEKyGYv5SFySoGd9yR1DudmcXFaKIXU8LYofL8NjbXquENxa3fs9w21Z0mvpOGXN+0BIllErLOys483houBjONyTnNAsIRae1stxdQRScSvFe1j8zzSi3uZZmGhRsDlcE4H2ruLj08c1i9x54bGONYlt0iiluWtiPCS5uGBYovPA7DruE13cws8zpGsYkQ6YkZ3WPJzgNKSx+9NlwtonY6eUv7YttqNbkOvz9PTS/QZVJJbkECHc7ls7fanFlHpiJbm7KxHp0GKUwhpJEi5AsDKByO+T/StbYQcMkseK3U0dxJJYm1cIJFSFxK+hVIUaunm35cu9X/D6cYfRtzDtOsT67BZhj2If5GudlPZboPTc+v2Qishk1gRuquG0SKHRtODh16juK0PE47ES2U93J4ML2FoUiso4zK5ALMVU+VUGfr05UE1299wTi3vKW6+5XNp7oYYkhWMSZDIoQAYAz/YrrjcUv8A+Ol8N/DbhVlGrlSEZwjEqGO2RXXuMkrQ7skXHyB0/lCAAxhI12+qNihHD+NW8UTho5HtQrSIhYxzYJG42PqMVRcCefjXhplpBfeHCAMBEhmB8oHIADf/AJ3Jke2ueKcLktJXuJM2KypHE2mMQlctrPP12qcVuryC6u4ka1jSZpNTWqxCZ4yfhlkXzZ71EYXF407Rbz0TxADT0B5ITicsMt/dzIQY3lYKRjSdKhNQx0OKpsGto5ZLmfBigHiMOQbHIfU4oKVwAoHTak/GeJC1t/CzgBTcTb9BkIv13P1FE+CGw5b2FreihSOLnXA1Ky3thxL3y/eMHZGZ3x+++/5D9ad+zEzLbWtveM7sw1QtISQitusZz07fPFYm3STiF+vib+JI0sx/hB1N/T61u7G3M8kcSjeVljG3IHmfoMn6Vm2NVhkfZv4OSuOE0Tct3i9uvVbKJSAoPL7YqxhufkK7CKiIBnACqMkk4G2+a5IPaq05H7qsjbOarBAYZ9a7ZiMiqmIx06U2U6FxKVz3yBvyyaXTxagcUbIw/POT610LO+dTJ7rMUwTqKEA7Z2B3/KvAOceyLpV2tHaNkhMLZNSmnhRHmBnrvUrtyl6LcRKPzojHIdcCuUCgfMk4HLHLnVN9c+DEdJw8mUix0HIt9KkRUjpXiJpu42t+eSqrnhoLjsElvlSXiKTwkhoA8ZYYIkLDSwPpVqoxGWJJ7mpCg51c3YDO4UDfc9s1o1LQwULBHC3XmeZQeWokm0cdOiWX0CywzRP8MqNGfkRjNZX2cmlhlvuFEM0ttMZIkUFm8OQ4IAG+x/Wt9NbRT3c0SqVgiLBsE528oAPPc5ruK0tbbX7vDHFrOqQooDOe7tzJ+ZqPiOLxwRiINu7Q+A80w27XXQEdlcSYaZhEo/D8UnL02H3oLikMcMB8INlSCzMSWYDnnp+VaAg4NLOIRa43XmMNVPmxGeR3aNh0GylQVL4JWyt5FZHxtRO/P+deSnRE0mrG+lQMcz89qon1QTOnY7fKl95eNqSPJwgLEdNTctv751ODg4XWwQPbOxsjDodV60iBVAOSqnO/In50L4oZif3FDAZ3OCBQzylQdbqgI/Edz8lG/wCVAyX0UTBlOWByNRwD0I0jf86k0mVszHyC7QRdRMUqA2mkYx9nEEArTWGCHkI3YhV+XWtZwr3Y8L9o/eTOIS/DEY2wQyg+I7DSJPL86yFhNFJDBJESY3UEZ5g9QfUHnWiteI3sNq9rbskMcpbx2iRRNPqztJIctgDYYxtWoVTTPGOHzIPzusQj/wCN5zePtZENdxLHb21jG8VrBOLkG4KyTT3GRiWfA0bbADGPvtJbm4uWd7maSWToZWLac9FHIfQUGgAwPUf3ir1HPO2CB2/KmuCxuoH3Sc7nK+IyKX0sy6k0kqSCQehwRt3r1tlT/L3zivToQ4yfhPPbcHtVEsw0qB2/lg0kNLjcBdVE0ijJY4RQzOf3VUZJr57x++edyucGd/Gcfuxr5UX++1azi9yI4PC1Ya4J1H92JN2P6D7189laS9uzo5zSBIx2X4VqDjFQIYMg3d7c1No4s779E44DakI9wRvK2hP8inc/U/pX0T2ds2eR5ghYovhRBRklyMsR8hj71lrKFY0jjRTiNVRe5xj8zX0ngtrPbJBFE8aSpGdbORgyPu2Bjff9KyZ7/wBRNc81fWt/TwWXpXAYEYYEg5G+3Q1Sxzj60w0wJNdLcuxEbNlEB1TPn97oK6g8C9juIxZxRBYy0MkKtsw2ClzzNJEGc5Qden5skcbKMxGiXLZXkw8QIEiI1eLMwjj09Tk74+lV2VvbXM4glebUzEIIgulgASSzHcem3Wira5Fu6iUl7eUeHKrnUoHQgHtvmrY7YWNzfXA3hisnkgbYg69gMjtj86VDAxxa5ovr2r/m1l2SV7Q5pNjbSyWPc2lvcySQWkemINHb+I7uBIGI8Yg8z2FX254mk8FzeXJiWRlzHcyEPKH2ASEbjfGCQKE4fJbx3sD3BUImrBf4VkxsxqyWG1jkkubq9W6YOZUigJZpDnK+I/IDlmvQOcW8QHntewHievQJUzRfh25b2ufTojpeE2rySvgDW7tgAYGSTipS0e0MJAL2smsgFtMihdXXAIzipRAy0JN7/IqIGVg0y+y1ikb79ySeQA60pcy308rxrlIk8gJxhAcAgc8k+leX1/CqG2iljaWQkShGDFIxzBI2yfnXdg8cGJ3Ybnw9Ckl9BHnYj8hv1z0ojgFEY4jWOGp0b9T6oFVyAuEY25oqKGFDjPisLmGBT8MZZt325kD51YWB93LFVt1vZJFyQqJHCAQN9ySaFFxpEawrp8ORpEYnU5Y+Xl8PLHSpAhlmDvusfn36uTkD+Zo5OeGx0sh2UMEbBGQoYkbUQZHZpJCOrE5rljVnmYgKM5OPQnnzO1eABHjbVv4ckjhP3cNjB5dqo8hdM8vdz5pQahyx5d6omjd0JOlUyEZ3OyluQwPN+VF6TpLwrh/Dj/EfJr1ZfLfTf1oO9uItJOoMRPExAByyxoFySdt9/vTDow0XcUggAXKxPtBBNB7zIiK725bWNWlTpOk4P6VgZ7+6aSVVRg+o6go0YPYs29b32mvl0zKoOGYzyKTklmJ8OMn65O36ViUgLEk7nOWPcnejuEwGovfuhG6HEalkPAY6zRsgPDupd3cqDzCdfmx3q2K0XWoA8zEAHmcn1pj4QA+tE2VuHk14+DOM9yOdWplGyMaBKe4vN3G6vsI1tsxBmKuxYauQfGNvnTiCTBGe4pa6cx1BPLuKvSaMRh5JETBwxdgoz33qwYfLdvBdy2QDEKex4g5psJVGQO9em454xuc0gl4zZRZ0l5WGfh8if73/AKUpufaSc5ETJGN/8Aa3/wB7/wAqlyyww6yOUBkD3bBbOS6CDXLIqJj4pWCj6aqWT8dsI8iMyTvyHhjSmf8AM/8ASsNNxO4mYscsx/HKxdvzoVppnyXdjjkM7Z+Q2oPNjUDNIxdTGUZ/2Ke8Y4ut0JsaRI4WFVQ6lSMfFv6/zobgdt4k0lww8sQ0J/nYbn6D9aTb1oeBXUZQ2jAKwLSI2NnzuQT3H98qp+MVktU0vt4eQRrDoY2SgH8K23A7UTXUZI8kIEz9sjZB99/pWzhISa3btJEc9996z/A4/Btg7Ah7giQ52IQbIN/v9aeoskpCxIzyH4VQZO3X5VTmkg6bqzSjTXZMnt1kv73KB/DiWZIs4EjkDAPp3riF7qKeOa/kMUZDRRRMNIwd8iNeSjHPFV8RlC3mpGIdYo1coSCGGcjI+lLHkZixJJJO5Ykn7mpktQ2KQ5RqCfL18lCjhdIwZjoQF5deEshEU3ix7HVoKDJJ2we1cyX9z7r7plDEwAOB5woIOkHlj6VWwGk7bihmOMGhxmcCS3S6IiJpADtbKtlJOMgfOh5nZEZQeewxV7NjScbb8/Xeg7l9TAfM7UypA1Qu39ipXOoVK9ZOZinKLoePAwMkbbDcU2hcaRk0tlGlcj8JB+xzVVxxGzsELXVzFAMbCRvO3+VBlj9q28tzBZcnZmCYxux2GOZJ2wM03thohKgBnXQMkEjWx3NfOn4xxG8B/wClcOuJV5rdXn/x7f0Kg+Y1uLe5LQJgEGXRI5DHG6/DgdKqePvyZGg6a/zyS43C6YSyLokI/wDK4TA2wwGoj++tUNKu+EAzEIjqOdgBnSOVVlyQBnYcvTrVbkfqTVQfMTqnC8lcyyE6cknSoUZ6AcgKUXtwsaSOx8sYLH17AfOjLibTn61lOOXwjRlzkRgSOP3nOyJ/ff0qK0GR4A3KZN3GwWd4ncPc3LKxyVbxJfWVxsPoP19K4SHTHk9WH6Z51XbRPNNErOqvNMitJIGKh5GA1EIC2MnoDTM2F8093aW0Mt3JaTTJM1tGzKvhsy6iOgOPKOZ+labh9M2liDCjkLAxoCXqpMgCg7Hpj9TtTTh9pK8ltbxmNZZ3CAzNpTW5wATg/IbUTY2UF7H7Ow4gtnuP+tyyTLAXaRbdwV8bSwPJW3+mN6bWFpw+WXglzb+8gjjEVtL7w6ftcILgSIIwNPI7ZPzPWXJKAD+dfsnCVn2RvEkjUhpBI0Xl3y4bTsKnEbKJZ3ga2eHQkQMUziSRW8NSWLL358+tOZGub3hV8oi1hL20S3hgiAWLxUmBVAo6+UHfc9cmh+NoY+IXGdO6Q6dLI2AIlTB0k4Ox2psPJd0Ov0SCL6FYri9iPDWWIY0kIyjl6Efoaz1ani84QeH0jHiv6udlX++9U8FtWa4iJRGYq8kpZQcA9s9c4xUGogMkmh15rzYM5s1Io7e4kxpjOO52H3NFx8Mc48RwPRBk/c1pr7hjQSLMo/YzE8vwv1X68x/xVMVsztpjRnblpjUu32WnI6Fm51RGKgZu7VJ1sYIxsmo933/Ll+VdaHjKOhKMhDIy7FWG4IxWmTgfEZsfsliXHxTsFP8AtXLfpRI9m4Qo8e4dz1WFRGPu2T+lOvha0WAUgwtZ3RZNOBcXXidtlyBeQaVuEG2roJVHY9ex/N/DOyHKuynBGVJBweYyKxsVpBw6UTWsYSRdixLMWXqrFjnB61obe5jmjWVDsdmB5qw5qaoOJ0RpZM7O6fl4fZToniVuV26aMwIB39TVLNzrhZcivGkWgpSw2ynMfX7DvQ7EYIz0O3151zLOByPTNCtc7MO9etdLAVruMH6Z+lLJ5QWY9M1JrkhWPoaWtIxruVKBsrjJuedShdXrUpzKk5lsrmVWaVokA8SQiGPoWc+RT6d/QHtXFp7P8It38ZbWJ7g4LTzAyOW6sviE4+ldWSGWVpm+CIvFF6yHaR/p8I/1d6cDAArXJ327DeSyaeUl1gUO8K6TntVts4EIH/jZl+mcipIdjk7b+nKgWuYLZLl5pBHEvh5chiNRB2woJ/8AVV3Fo+JAXcxqvU7rOsmRuEH0zQ0t2ByPasrfe1fDrfPhhn7NKwiU/JRlz9qzV37YXsxZbfUAdv2C6B/vbL/pVWZRzSbBEAHO2W8urtUR5HIAAJAYgaj0Az3rEcUuWmn8MnJRvFl9ZWGw+gP5+lIZb3i90xYvoJ5sSXf/AHNk/pRFt4mgeI5Zw7a2Y5JJOrJPOrBhmEOjlEsnJSaaMZ9TqtXwWKCGX2fLw28s3E78NquYxKIraGcRYiQ7BiVdi2MgKMYGcsY1ufduF31vZpIom4jxSS7urh47O3vPenIMqRkZcKECA5zkADnlLZcR4lHbwQ2zxxm2MjwzrHGLmNXbxWRJiNWknfArmVpZXXLEu6nWxJZmdmLMzFuvrVqEJJ/PHyRay0nB4Vkbg3hv7zLb8I409zFZBy0Tz+NIF8Qp4eTrCj1Hpvzb39vatbC0i0xWgllh97xNJJcyBVaaTQFXVgBVGMAd80riyiMgZgpVVZQSAwXOAQNq6VT5tuQzvtSuCCTfb/37pWXqrpJp9DrrZUmbxJI4zoiZs5GY0wu2dhjalk7qis7fCgLHsfSjJXyBnoOnrikfE51VBGTgYMsn+VeQpdgukJLcM1zcqjHPm8eX5/hWtbwK00QmZh5piCM8wi7L99z9azXDLaS5kUkHXdSZY/ux/wDAzW/t4xGoUAAAAAdgBsKis7V3nn7ckQpYuzmPNFLGjgIyhlIwykAgg9wasREjGhFVFGwVAFH2FexqMjr6dzjPSiYBa+8Ks6SNEWCaYn0NqYgA6uwpZNgpx7IVFcsmVznvR99bCO/ura2ichGXQkYdyF0Kc9TVcFldXTSRxhQyfGJToK525Hf8qbc5pbmTRe0tzX8UmuoF05GfX7UuhuGtJjnJifAkUf8A2HqK0lxaRJMtvPPkeQO1suvDscCMBsb52NKOM2tpazGCESl4/wDGeRgQSQCAoA6df+KgVEbJ2mNwuCmWyWcMu6K8XYFTkMMgjkQarkmYDJOB3OwrOveX0MeiFmIUnSiBdZz+FWNASNx6YkG2WM97qZnb/alUiow99O/K8i3I3Ut1Wxu+60M17bqTqlUnsp1fpQE3EoUBO+O8hCD86WLwvi0v+LcyBT+G3jWMD/Ud6vj9nochpEaRu8zs5P0O1MZIW951/L8CiurnHutVE3GYG8qyKx/dhUufuNqHN3ezf4NrKQeTTMIx9udOl4akR0IigD91QB+VFR2PLakmphZ3W381GdPK7ms54fGT+C2+8lStX7kO1Sm/8gP2hNXf1WvtbNUtYPd4iFjWUtgjQscZ0gKD9e9FiGIiyRn80xLsIxk6G5Es222O3f68APGLlASRaWgh25BpCAx/Nq9lkt45NRmTCW2iIRgucmPwxkjbuTv1rSS5zjuqTka06jp/fsV4jW+bIxxgtLLJHmXz5iUjU5U7Anf7fWkN+w932/71xK2B+7GAgH5mmDXiRi1ZI8tBFJGRIcqxfUSQFx3PWkHEr2VokjLDSuUhVVVQpI3bYc6W2JzjZN8VpGUb+HkP7WcvbS1u5i0katoQxRnsMkkgcuecUGvB40PmY6cDAAAP16flTmNAR9hXUuATvtkDt0zRuKlYOSlZi1oalMlrBBExVBqPlUnc5PzpaF0SEdHG3zG4/nTa7kDMqLjyAk455PegLhDjWNimk465qVJCAzRdhlLXhyJtpCoK/vAL8vlTNI/2kjHJCIgBbbdvSkSSFTkehXHbnTaKXTGNRJY7tnfc0OBsrO031CPVgFkGdzgAV1qwH5AYHPnsOmKA8c7/ADFQytg77dTyH3NeLkq6umdRk58oUkn0Ayay19I1xKkQzmd9b/wxIeX99qaXl3EYyiyoWf48MCFUb7kbUqs0aeZ5gMtM4ihH8AOB/wA0xKbjJ19uf2SmN4jg0LT8AsZZC0kUMkjH9lEsSFjpBGo4HTOB9K1sXDrwwSXLCOG3RxHrnbTk6xGxUAE4U8/lQHBF93n4ZFEzLie3iYqSNSmQag2O/WmPEpJJb6+1HaOWWGNR8KIhKhVH602S4vytRYZs+QK66tBZvaK0wlWWOOYvCMAozHOjV6DY+tXX0FrB/wBLktlkVJ4Y7g+K+t8+IDueXLtU4oR4fBGPJuG24H8RGdh6/wBat4nDcJZcGLROPBtPDl8pIjbUMKx6GmQ8nJc9UhryTGSd7q/i17cW15PHbMYNQiklePGuZygwWY9AMAD+tV38zFeEcQQBZp4FZz0MiY32+eKu4nYSXdyZ1uLSKFooAzyzKCulcE6f+aW8Su7d2tre2Ja2s4VhjY7ayPif6/3zpqINcGhvqmYWseGBo15/xzRzQJd3nDuIRge7SBprkfuSQrnf6/p61keIyeLLLMRgyu8m+fxEmtBazywcH4vIW8jyLbwDqJJBhyPpWVunJzk0pjLE+GicijILr8tB7qmxt/HvFJHkhBlb58lH99q0C2oc5KjPyobhFvotvFI81wxf10DZf6/WncKKOdZtjVZxapwbs3RR5DdyD9zXHKp7onamJxviqJThT9qBGVybS426atWOddeEgxsOdXE5r0hcH0GabzFy8qdK1K6zUry9dEtLM+tndmZj5ixyTjvVLM3epUrcQs6eb7oWVmwd6RXjM0xBOyquP9WSalSpcA7a7T98KrWwBINF39ulq3DzGzsbiyjuZDIVPnaRlIGANtqlSiV7OCJ8is3rZiSTknBP3rmViVI7kZqVKlP2TTd1RFuyA8g5X6c6YMSqOR+EZGeVSpQN/eKs8H/UEre/u2yA4QD9xQD9zk0Gs09w7iWRzpOBk5P/APWalSk/7AKLM42OqZ2FhazLrkDMQdgWyPtR/DbaFJrplB/+PdTQxDIwFHp33qVKmzMaIbgJWFOJqTc8lquFk+/cMHe8t/8A7g014zCtvfyBGc+OguH1kHzyMxIGANqlShP/ANh5K0X/AOdvl9V1BxjiEEENungkRkCGR41aSIH9wnbbptVD3l66CF7iVocg+GzEpkksSR896lSuNa250XY2NuTZDEmqyx71KlPBSQuZbq5aBbUyHwI3aRUAAGtubEgZpTMNRCnOGYKfkTipUpuTRpskEAA2WqRFQRqowqqqgdgBiiFJHLtUqViUhuSg68Zmyd+tCzs229SpTC8h9Td6hdsYzUqV0Lyr1GpUqV1eX//Z")';
    document.body.style.backgroundSize = 'cover'; // L'image couvre toute la page
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed'; // Le background reste fixe lors du défilement
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <section style={sectionStyle}>
      <h2>Blog</h2>
      <p>Bienvenue sur mon blog où je partage des articles intéressants.</p>

      <div style={linksContainerStyle}>
        <div style={linkBoxStyle}>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://developer.mozilla.org/static/img/favicon32.png" alt="JavaScript" style={imageStyle} />
            <div style={textStyle}>JavaScript</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.php.net/releases/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.php.net/favicon.ico" alt="PHP" style={imageStyle} />
            <div style={textStyle}>PHP</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://reactjs.org/blog/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://reactjs.org/favicon.ico" alt="React" style={imageStyle} />
            <div style={textStyle}>React</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://nodejs.org/en/blog/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://nodejs.org/static/favicon.ico" alt="Node.js" style={imageStyle} />
            <div style={textStyle}>Node.js</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.ruby-lang.org/en/news/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.ruby-lang.org/favicon.ico" alt="Ruby" style={imageStyle} />
            <div style={textStyle}>Ruby</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://golang.org/doc/devel/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://golang.org/favicon.ico" alt="Go" style={imageStyle} />
            <div style={textStyle}>Go</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.scala-lang.org/news/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.scala-lang.org/favicon.ico" alt="Scala" style={imageStyle} />
            <div style={textStyle}>Scala</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.swift.org/blog/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://swift.org/favicon.ico" alt="Swift" style={imageStyle} />
            <div style={textStyle}>Swift</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.perl.org/news/" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.perl.org/favicon.ico" alt="Perl" style={imageStyle} />
            <div style={textStyle}>Perl</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.typescriptlang.org/docs/handbook/release-notes.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.typescriptlang.org/favicon.ico" alt="TypeScript" style={imageStyle} />
            <div style={textStyle}>TypeScript</div>
          </a>
        </div>
        <div style={linkBoxStyle}>
          <a href="https://www.dart.dev/resources/news" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <img src="https://www.dart.dev/favicon.ico" alt="Dart" style={imageStyle} />
            <div style={textStyle}>Dart</div>
          </a>
        </div>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '2em',
  textAlign: 'center',
  color: '#ffffff',
};

const linksContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1em',
  justifyContent: 'center',
};

const linkBoxStyle = {
  flex: '1 1 calc(33.333% - 1em)',
  maxWidth: 'calc(33.333% - 1em)',
  boxSizing: 'border-box',
};

const linkStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'black',
};

const imageStyle = {
  width: '32px',
  height: '32px',
};

const textStyle = {
  marginTop: '0.5em',
  fontWeight: 'bold',
};

export default Blog;
