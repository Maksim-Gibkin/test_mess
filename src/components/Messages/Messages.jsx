import React, {useState} from "react";
import s from './Messages.module.css'
import Button from "./Button/Button";


const chats = [
    {name: 'Conversation', logo: ''},
    {name: 'Teem chat', logo: ''},
    {name: 'Meeting chat', logo: ''},
]

const messages = [
    {
        nickname: 'Me',
        date: '12 May, 12:10',
        message: 'Hi!',
        isMe: true,
        ava: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg'
    },
    {
        nickname: 'Daisy Fitzroy',
        date: '12 May, 12:10',
        message: "What's up?",
        isMe: false,
        ava: 'https://pixelbox.ru/wp-content/uploads/2020/11/ava-steam-98.jpg'
    }
]




const fullDate = () =>{
    const date = new Date()
    let arrMth = ['Jan','Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    return  `${date.getUTCDate()} ${arrMth[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()}`;
}


const Messages = () => {
    const [message, setMessage] = useState('');
    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const enterHandler = (e) => {
        if (e.key === "Enter") {
            messages.push({
                nickname: 'Me',
                date: fullDate(),
                message: message,
                isMe: true,
                ava: 'https://avatarko.ru/img/kartinka/21/multfilm_pokemon_pikachu_20287.jpg'
            });
            setMessage('')
        }
    }
    return (
        <div className={s.container}>
            <div className={s.header_wrapper}>
                <div className={s.buttons}>
                    <span>Conversations ({chats.length})</span>
                    <Button name={'New conversations'}/>
                </div>
                <div className={s.searchInput}>
                    <input type="text"/>
                </div>
                <div className={s.chats_wrapper}>
                    {chats.map((chat, key) =>
                        <div key={key}>
                            <img className={s.avatar} alt="logo chats"
                                 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhMWFhUXFRUVGBUWFxUXFRcVFxcWFxUXGBYYHSggGBonGxgWITEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lHyUtLS8tLS0tLS8tKy0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANsA5gMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwUGBwIECAH/xABKEAACAQICBwUDCAYHBwUAAAABAgMAEQQFBgcSITFBURNhcYGRIjKhI0JSYnKCsdEIFDOSssEkQ1Njc6LSNIOTo7Ph8BZ0wuLx/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAYDBAUCAQf/xAA2EQABAwIDBQcDAwQDAQAAAAABAAIDBBEFITESQVFhcROBkaGxwdEi4fAGMkIUIzOCFVLCYv/aAAwDAQACEQMRAD8AvGiiihCKKKKEIooooQiiiihCKZNJdJ8LgI+0xUoQH3V4u56Ig3txG/gL77VlpXnseBwsuJl3qi7lHF3JsiDxJA7uPKuXMZj8VmmMMspMkshsqj3VXfsog+ag/MneSaNM14SALlWZm2vKViRhMGoHJ52JJ8Y47W8Ns03YbXrjkb5bC4d16R9rGfVmf8Kc8h1cRhAZiWa29VsFHdfifHdWGeau8KwNu0Q9Va/qGBvVJ9fCzW9uNlnyYpAzM3txAy9VNtC9aGCzBhGCYZzwilt7XC/ZuNzeG47juqd1x3pFkEuCkG0bqd6SLcXI5fVYVfWpnTlswgaDENfEwgXY8ZYuAc/WBsD4qedWo5GyNDmG4KuxSslYHsNwd6sqiiiu1IimHSXS3B4BdrFTKhPuoLtI32UXeR38O+o1rV1hLlkYjh2WxUguoO8RpvHaMOZvwHO3Qb6AweDxWY4hmJaWVztO7E+rMeA5Ad1gK8Lg0XOi8c4NBc42AVw4zX1hx+xwUz/bdI/4dutWLX4L+3l7KOq4gMfQxD8abMp1WLsgyym/SMC3qRv9KXx2rGG26SUf8M/yqo6uhGdz4FUXYlTjO5t0Kk+Xa8ctkNpUnh+syB09Y2Lf5anWSaRYTGLtYXERyi1yFYbQ+0h9pfMVznmeraUXMUyN3OCh9QCKi+Ly7F4OQOVkiZT7Mi3AB4XWRTuPnUkNXDKbMcCeGh8DYqSCup5zsxvBPDQ+BsV2VRXP+geuiWIrFmN5Y+AnUfKp9tR7694G1u+dV8YTFJKiyRsro4DKykFWB4EEcasK2tiiiihCKKKKEIooooQiiiihCKKKKEIooooQiiiihCpf9JLGkQ4OEHc8kshHUoqqp/5jVHdTWWqRJMRdtrsgeg2VdreNx6U5/pK/tMD9mf8AGKsdSpH6s/8A7hv+lFVLEDaG3EgLNxVxEFuLgPf2VxYPCjZpoz2AAU/YaUbNMOfTVVqgwQKpWtY2myUB0jypcTC8LcSLofoyD3T/AOciaqvRjOpctxqTAENE5WRPpJ7siHlwvbvAPKrlkO+qv1mZZsTrOo3Sizf4i3/FbehqjgtTsyGE6HMdd/iFm/p+sLZTTu0dmOo18R6LqPBYpJY0ljYMjqrqw4FWAKn0NamkObx4PDS4mU+xEhY9SeCqO8sQB3moFqCz/t8AcOxu+GcrvJJ7KS7Rm56HbW3IKKZv0is/KxwYFD+0Pbyb9+wp2YwR0LbR/wB2KZU3qocXiJ8yxrSNvlnkv3LfgPsqo9Fq8tDdH48PGscY72Y8Wbmx9PKq41V5X7+JYf3SfBnI8rD1q4MplArBrakSVHY/xbrzP206paxGrEtV2H8W68z9tOt1JsPhABTZm6gCtw5gAKj2a47arurmjbHYLqtnhbDYJmxB31rSxqylWAZTuIIBBHeDSrtc1jSyTncJQc76rhVxpfoV2YabDAlBvaPiVHEleo7uVb2p/T5sDOuGnf8AosrW38IZG4ODyQncw8+RvODVP6bZOMNiSEFo5B2iDkATvUeB+BFM2E4g6X+1IcxoePLu9E34Hijpv7Epu4aHiOB5jjw6Lr6ioRqhz843LYmckyRXw8hNySYwNkkniShQk9b1N620xoooooQiiiihCKKKKEIorEm281BdIdbGWYQle1M7jdsQDb398hIT0YnuoQp5RVKYnX+gb5PAMy9XnCN+6I2/Gl8Dr8gP7fBSpv8A6uRJd33glCFclFRLR3WNlmNISLEKsht8nKDG5J5Da3Me5SaltCFSv6SmFvHgpeSvMhP2hGw/gNR/U/itmGVeYmDfvoLfwGrB1+Zf2uVM/OGaKTyJMR8vlAfKqf1WYzZxEkfJ4rjxRhu9Gb0qhiTb0zjwsfD7XWZi7b0jzvFj4EX8rq+Icx9njTTmWK2q0RiDSUj3pZmq3PZspPnrnSM2SsDUd08wPa4KTdvjtKPug7X+UtUipLExBlZTwZGU+DCx/Gq0Mpjka8biCqlPMYZWyDcQfP4UJ1B5t2OZiIk7OIieO3LbX5RSfJGH3qaNbubfrObYlr3WNuwXuEQ2WH7+2fOmLI8wbB4uGexJgmRyvAnYYbS+YBHnRlMTYnGRBjtNJMpcnntNtOfS5p9c4NBJ0C+mPeGNLjoBf3Vu6NYLscNFHz7NS3229pviTT5DiLVq0XpBdK5zy86nPxXzIzuLy86kk+K33xp61qSSE0nevCa8dI52q5fK5+pXtYlqweSkXkrwNuvA26zeSobrKw+3AknNJLfccH+YWpM8lRvTvFAYUqTvdowPL2z+FaOHtcKhhHEfdamGNc2qjLeI8ND5FPf6N+akTYrCk7mRZ1HIFGCP6h0/dq+q51/R0wrNmE0vzUwxUn6zyR7I9Fb0roqnBPyKKKKEIooooQitbG4yOGNpZWCIilmZjYKo3kmtmuddd+nJxE5wMLfIQt8oQd0sw4g24qh3W+kCeQoQm3WTrKmzBzDhy0WEBI2QSGm+tJb5vROHW54N2jmr/E4kByBGh3gyXBI6hBv9bU6autEg+ziJ1uvGNDwPPtGB4joPOruynDrWdLWF0nZRd59h8+CyZsQLpexgtlqdbchuPO9x1Va4PVHFb2pJSe7YUem+ksx1UIB7ErA/XCkeq2q7AFApozWZQK5ldLG3a7Q+XwuZnTRN2u1N+74XNmkGhuJw12KbaD58V2AHfzHpTvoLrSxeAZY5WM+GBAMbm7ov9054fZO7dy41Z2MkuagWl+hiy3lw4CycWjG5X5m1hue/rVemxgF+xNlz3d/2y6KpSY81z+znsP8A6GneN3UeAV2SzYfNsvlEEgeOeF4ww4qzLYbS/NZSQbHpXLOSYpsLi42YbJjlAcHiBcpID32LU6aFaXYnKsRtx3KEhZoGuA4BsR9VxvseXeListY6wSYs4vCm8GLHbAWsUl4TxuOTh/at0dbXBBO09ocC06FML2B7Sx2hFj0OStYV7Ue0FzTt8KgJ9qK0R+4o2T5rbzBqQ0gzRGJ5Y7UGy+YzwuhkdG7UG35116Lw0jK9ZSPWnK9eNbdeNZdU9pAlsViB0ml9NskfjT3q1h2sZe3uRO/xCj+KmvS//bJ/t/yFSjVTD7U7/VSMeZJP4Cm6qeRQF3FoHjYe6eq6XZwwuvqwDxsPdWHRXhNJPJSeBdIQF1mz0k8lJvJWs8lSNYpmxpR5KQeSk3kptzbNo4F2nO/ko95vAfzq1FCXmzRcq5DA55DWi5K28bjUjUu7bKjiT/5vNVrn+bNiZL2IUbkXuPM/WNJ5zm8mJa7blHuoOA/M99b+h2ew4KUYh8OJ5UN4g77MUbDhIVAJdxy4Acd5tZkoqEQfU793p9024dhwphtv/d6ffiV0Fqg0RbLsF8qtsRORJKOagbo4ye4Ek9C7VPa53OvXMdq/6vhtnpsy3/e7T+VSLIde8TMFxmGaIf2kTbajxQgEDwJrQWqrmorQyjNIcVEs2HkWSNuDKbjvB5g9x3it+hCKKKKEKHa1NJDgMulkQ2lf5GLqHcG7DvVQzeIFc3aJ5P8ArWICtfYX5Rz1RSLjxJIHrVj/AKSOYkzYTDA7ljeYjkS7bCn/ACP6mmvVhgwmGeTm8h3/AFIwLfEtVLEKgwU7nN1OQ7/tdZ2K1Rp6Vzm6nIcid/cLqbYdgtgNwG4DoOgp2w+Z7NMl69vSfHO9miQ4ql8eif5M6NuNNuJxxbnWleiun1Uj9SupayWQWcV6xvRXlFV1VuojpromJwZoRaYDevKUC+7/ABOh58PCr32hdTcWO9TcWPA7uRq/ahum+inbA4iBflQLug/rBv3gDjIPjW9heJbFoZdNx4cunDh6M2DYv2doJj9O48OR5enpF9AM3GHxIDGyS2jPQMSNhvXd96rYka1c/Wq3NEM7/WcONo/KR2jfqfov5/iDUuM0lyJm9D7fCm/UFDcioaOTvY+3gnqV605XrOV6asfmsMX7SQKehPteg31kxRlxsBdYkMJebNFzyUB0s/2uXxX/AKa1M9V4/o0p6zEeka/magmfYlZcRI6G6k7jw4ADgfCpboFnEEUDRPIEcys1m3AgqgG/hypgr4nmiDAM/pyTRiUL3Yc1jQb/AE3FuGqnbyUg8lJtNcXBuOo4VrvJS21iUmxpR5KQeSk5ZrbyfOolnulQF0gNzzk5D7HXxq7T0r5TZo+Fo0tHJO7ZYO/cE7Z7nyQC3vScl6d7dBVf43FvKxdzdj8O4dBWA2nbmzMe8kk/EmpjkOgMslnxB7JfoC3anxB3J8T3VvNbT0LNp5zO/eegTI1lLh0e085nfvPQcOneVFsqyyXESCOJCzHpwA6k8hVoaN6qQQGxDkn6MRsB4s3H0FSTIMrhgAWJAo59SepJ3k1PsrdQKqsr3VLrM+lvmfW3cqceJvq32jOw3u2j8d2fNQSbVlgwvuP47bX/ABtUE0n1c7ALYZiSN/Zva5+ywA39x9avfNMaoFQbMcTc1BU1UkDgWPJ65jz9lXrKyWmcDHITyJuPzoqf0P0rxOVYnbS+ztWmga4VwNxBHzXHJuI7xcHqjI82ixcEeIgbajkXaB5jkVPRgbgjqK5y1h5KGH6yg9oWEluY32fxHA91ulPmoHS0xTnASH5ObaeIn5soF2XuDKPVR1rYpqhs8YeO8cCt6jqm1UQkblxHA8F0FRRRVhWlz1+kfhGGNw0vzXw3Zjxjkdm+Eq1rau8YDhNkcUkcH71mB+Pwq1dbeiJzHBERi88JMkQ3XbdZ47nhtD4qtc4ZJm8mDlJt9WSNri9jvB6MDeqdfTGohLBrqFn4nSGqpyxuozH53q4RLXva1H8p0jgxA9h7N9B7B/8A7eVOXaUpSQOY7ZcLFI8lO6N2y4WPNb4lr3ta0e0o7WuOzUfZJwEte9pWh2te9rXnZrnslvdpQJK0xLXva15sLzslDtO9Fh7WJgHUyoOfMyKP4h59aiOj+aNhpg490+y46oSL+Y4jwq3+1qsdOcBDFiB2W7bTbZBwQsTw6A2vbl50w4ZVGVpppc8jY8uB6bj3cE04PWGdhpJhfLI8uB6bj3cEtpBpW8pKYclE4bXB248OYX40jo9oTjsb7UMLFCf2jEJH3+03vfdvUr1R6BLjG/WcSt4EayoeErjjf6g5jmd3AEHoLD4YKAAAAAAABYADgAOQqx23ZOMFK0XGpOnsSe+w9GOnpo4GbLRYeZ5kqgINSOMK3eeBT0HaN6nZH4Uz5zqnzLDgsqJOBf8AYsS1vsOFJPct66deMVozCsutxCvovqc4O5ED2sVZaxrlyTl+az4VyFJABIaN77NxuIKngfQ1JptMYdgMA5f6HCx726eFWtrB0EizCMugCYlR7EnAPYbkktxHQ8R4XB50xWHaN2jdSrIxVlPEMNxB86v0VRS4o3tALOGovnyz3jnkdyoVWHQyPDnjPiMr9fnXmt7M86mn3MbLyRfd8xzPjWzkGjU+LPsDZS++RrhPAfTPcPO1SHRHQoOqz4nepAZIgdxB3qZD0PQefSrCijVQFUBVAsFAAAA4AAcBXNXijIB2VOBcb9w+SsOuxqOnBhpQLjfuHGw3m+/1TTkOjUGEHsLtPzkfZLeR+aO4fGni9Yl6wZ6XXyPkdtPNzxKVZJJJnbbySeJS6T2raTNiBxpoZ6SZ67jc5uilic9n7U44rMmbnTc8tJs9ItJXebtVIdp2qznAYFW3hgQR3HcaqfCYlsHi0kX3oJgw5X7N7/G3xq0C9VXnxH6zPb+2k/iNbeDkhz28gUw4CSHvZuIBXZysCARz30Vr5TfsIr8ezS/jsivK3UyrcqvdPNVmEzEtMh7DEnjIoujkf2icz9YWPW9WFRQhcl6T6vMxy8kywl4x/XRXeO3UkC6feApswWkuJi3CTbHSS7j14/GuxiKjGeaAZbiyTNhY9o8XS8bk9SyWv51w+NjxZ4uo5ImSCzwCOa57wmnH9pFbvj/Jvzpyg0xwre8ZE+0v+kmpzm2obCtc4fEyxd0irKo8LbJ+JqL5hqIxyb4sRh5B9YvGbehHxqm/DYHG4BHQqhJhFK7MAjofm6xjz3DHhPF5sB+NbUWOQ8JEPg4NQXOdCsVhf2r4bwGKw9931S4Plao2f/OdVzhDNzj4Kq7Aozo8+A+yuMTVl2tU7FOy+6xHgSPwraizfELwnkH32P41E7BzuePCygdgLv4vHhZWyJKq3P8AEmXFSMLn5RlUfZOytvSl4NKsUvzw32hw9LVoYGb5eN2/tVY9PfBNWaGidTuc51jllZXMNw59K9znkZiwt1ufRdW6K5auFwsMC8I41U97Wu7HvLXPnT+sopsVqz7Sk2ixp0AJIuTn4pjdFdbks1abtesS1JySWqlXYjJVOzXbWBqyY1QOvDLFjxqToLCeO7f4kZ2WPmpSrunxNU9rxmDHCjnaY+XydX/03tsrW23hwPgT6gLib9qX1eY3bwag8Y3aLysrj4NbyqQs9VpodpPFhYnjlEl2kMgKBSPdAtvN77qeG1gYb+zm9I/9VbNXh87qh5Yw2JXz2uwyodVSOZGbEkjhmpez0kz1Dm0/h5RS/wCQUg+nycoW82FRtwypP8PT5XDMIqz/AA8x8qZs9Js9Qk6eHlD/AMw/6aQfTl+UMY8Sx/Kpm4ZUf9fMfKsNwaq/6+Y+VN2ekmeoG2mWIPzYh91j/wDKtaXSnFN88L4AfzqduFTb7eKsswWffYd/wp5jsYsSM7cFF/HoPE1AdHsvbG42GG1zNMoa3JS15D5LtHyrWlxc+JZVJeRibKguxJ7lA3nyq+dTWrx8FfF4pdmd12Y4+cSH3i31z05DxIGrR0nYA3NyVtUFF/TNNzcn2VrgUV7RVxX0UUUUIWJNuNQPSfWzluDuqyfrEo3bEFmAPfJ7o8iT3VWGt/WLJipnweFcrhkJR2UkGdhua5/swbgDgeO/daJ6OaIzYmxtsqeZ5+Arlzg0XKlihklOywXP5ruHepTneurMp7jDrHh15bK9pJ5s+70UVB8xzvG4ontp55b8VZ3YeS3sPSrYy7VzGi3Zdo9Wvb0rRzbLxFuG7uXdUElRsjILXo8G7d1nyAchn53A9VVkOUTt/VN52X+KtpNG5zxKDz/KpU/GsSapmuk3ABMcf6Wo2j6nOPeB6D3UeXRk85R5KT/OlV0diHF2b7Oz+dPLGk2Ncf1Mx3qwMDw+PSO/Uk+pWgmTQD5jH7TEfhTDm2F7OUgD2eK+B/73qVUwZ7io2sq72Hzhwt0A51YpZHl+dysnG6OljprsDWkHLIC/EZa8fhdE6vc+XG4GKW4LqojlHMSIADfxFm+9UlJrl7QjSyXLZ+0T2o2sJY77nXqOjDfY/nXQGS6U4bGx7eHkDbt6HdInc6cR48OhNJONYQ+llL2j+2TcHhfcfnf5JZjk2hbenqae1N2IxNIYjE00ZnmkcSl5XVF6sQB8eNZ0NPtGwXZK3J8TVF6wc6GKxZKm8cY7NTyNiSzDxN/ICnfTDT0zK0OFuEO5pDcMw5hRxUd53+FM+g2RDFTbT27OLZdl5ub+ylum7f6c6c8MoP6FjqmfIgZDePudAPwUauqZFGZH6DM/nPRb+G1fySQpKsqKzIH2HDC194Fx3W5U2ZhoVjY/6vtB1iO38NzfCrgryq7cbqQc7EcLe4skdn6hq2uubEcCPcW0VBT4dkNnVlPRgVPoa8gKhhthivMKwVvIkED0q+MVhkkGzIqOOjgMPQ1H8y0IwctyqmI/3RFv3Dcelq0YsbjP+RpHTMfK1YP1HE7KVhHMZj2PqmLIMBo7PYTYjHYdv7wwtHfudIjYd5Aqy8o1R5JMgeKWSdfpLOrD/IKqfMdX86b4nSQdD7D+hFj60wlMXg3DDtoHHBhtRnydePrWpDUwzf43A+vhqtqnrIJ/8TweW/wNj5Lo/D6osnW39GLEfSlmPw2rU7YbV/lScMBhz9qMP/HeqQyDXRmOHss+xiUH0xsSW7pE/Eg1aOi+t/L8WwjkLYaQ7gJrdmT0Eo3fvbNTqyptl+TYaD9hBFF/hxon8IrfrEG9ZUIRRRRQhFMGnWYthsvxUyGzJA+yejEbKnyJBp/qOawcC0+W4uJBdjA5UdSo2gPO1qELlnRnACadFPDifAcq6C0VwsagE2rn7RfGiKdCeB9n14fG1WjDn5QWBqlUPDZATwTPhNKZ6Nwj12s/AW9/NWVnGaRom61VXpBmO2xtSOYZy8nOmlmvVOafbyCY8MwoU31O1XhNJsa9rTxeYRx++wv0X2m9eVQsYXGwWlPURxN2nkAcTl6rYJrWxeKSMXc2+r84+FMuMz1m3RjZH0uLfkKanYk3JJJ5mr8VGTm8pVrv1HG27acbR4nTuGp8h1W/mGaNJuX2V6c2+0efhWvgsDJM4SNC7Hgo3n/sO/hTlo3o5NjJNmNdwttOfdUd/f3Vd2iuh0WESyLdjbac22m/Id1dzVDYBsRi7uHzv+Ui4liry+7vrkO7h14DkMzv4qu49Wb9jcyjtr32f6q30b2ve/zuHdzqMZpk2Iwh2mSRCODqG2fESLu+NdD4iAKKZcU1ZX/JzQX7SzvLwt7gpc/5iopr9pZ3LTuBG7xVEf8AqPG2t+t4i3+NL+dJxYXE4prhZpW4bVnf1bkPE1jnrA4nEHrPKfLbNXfhUsiDoii3lV2rq20jGuZGLu7uHAZ68lp4lijqSNjg25dxOmnLPXkquxGguJSBpWK7ai/ZC7PsjibjdcdBfx5U1aMZucLOsg3qfZcdYyRteYtceFXXVSac5H+rT7SD5OW7r0ViTtJ/MePdUFBX/wBWXQzgZ6e467x9lTwzEzXF9PUgfVe27LeO7Ud6tWOdWUMpBVgCCOBB3givS9V5oFpDs/0aRtxPyRPI8CnnxHffqKnJesWqpHU8hYe7mEv1lC6mlMbu48R+apYvWJekC9eF6hDVXDEsXrGSxBBFweIO8HyNa5evC9dhtl2GWTLmeiWFl3hezb+6sB+4d3paofn2i0uHBdT2kY4soN1+0OQ76scvWDNWhT188R1uOB+dQtalxKogNr7Q4H2Oo/Mk1aqdZsmDdMLi3L4VrKrMbthzwBB5x9V5cRzB6NRwQCDcEXBHAiuQ9LsoEEoaMWje9hyVuYHdzFXpqJ0hOKwHYubyYZhFfmYiLxX8AGX7gplikbIwPboU3wytlYHt0KsuiiipFIivCK9ooQuW9a+g75diWeNT+qysWjYD2UJ3mI24W5dR4GmLA6RFQFlUtb5w97zvxrrjH4KOaNo5kWSNhZkYAqR3g1VmeaicHIS2Gnkgv8xh2qDwuQ3qTXEkbXizgrVJWTUr9uF1jv4HqFUj6Sw8kc+NhWpNpKx92NR3sS342q0oP0fxf28eSvRYLH1Mh/CpDlmo/LI/2pmmPRnCL6RgH41E2liG7xV+XH6+T+dugA9iVz5PmU0hsWO/5q7ge6y8akejurTMsXYrAYo+PazXjW3UA+03kK6TynRnAYMbUGGhisN7hRtWHWQ77cedUjrU1oti9rCYJiuH3q8o3NP1A5rH8W57t1TtaGiwWVLK+V21ISTxJv6qDaSYDCYZuxgmOJkU/KTAbMN/oRDeWHVybHkOdbuh2iUuNe+9Ygfae3H6q9T8B8KX0M0OfFkSSArCD4PJzsvd9b07r2yHLEjVVVQqqAAo3ACqFRWWd2UX7t53D2useqr/AKuxgzdvO5vyfRGjWjscEapGgVRy5k8yTzPfT7OFQUo06otRzNczvuFVJXx07M8yqM0kVLHfV3mtfM8XemWaW12PIE+lZTTXprzye2HnPSGY+iml97zK9K0kjppOpVIu+01zzNz58av9f5Vz4RXQGHa6IeqIf8tbmPD/AB/7eyY/1MMov9v/AClKZNL8qGJwzoB7a/KJ9tRw8xcedPDPSDSVgQvdG8PbqM0swPfHI17NQbjuVEAkHoR5EGrN0Uz/APWI9lz8qgG19YcpP9Xf41E9N8s7HEFlB2JbyDuYk7Y9d/nTNl2NeGRZENiD5Ecwe404TRMrYA4a2uOXI+hT3UQR4hTBzdbXHI7x7HxVvF6xL1oZfmKzRrInA8uYPMGli9LZjLSQdUpmItJaRmEuXrAyUgXrEvXQYugxLl6wL0gXrwvXQauwxNGmibWGv9GVSPMEfzqR/o3TkYrFR8mgVvNHsP4zUT0yxNoQnNnHoAT+Nqmv6NuCJkxc9twSKIHqWLMwHhsr6imDDmkQ58SmjCmltPnxKveiiiry0kUUUUIRRRRQhFFFFCFWuvXSM4XAdjG1pMSTH3iIC8pHjdV+/VK6B6PripS0ovFHYkcma/sr4cSfLrUm/SGxxfMY4vmxQJYfWdmZj6bPpW/q8wYjwcZtvdmkJ8bAfACs/E6h0MBLdTlfhzWXjFU6npiWmxcbDv18rqZZfEFsALAcAOAHSnpcYFFMKzWpKbFGluOo7MZJSiquyblqnHHZkTzpmmnvSckta7yVA+R0hu5VZJHyuu5Zu9MOmeM2MHL1b5Mfftf4Xp0aSodrFxXyUcd+Llj4KCv4tVqhh252N5+mau4bT9pUsbzHlmoBerwyHEbWFw5/uYR57IB+NUl2ZsGsbEkA8iRYkX7toeoq1NB8XtYJBzQyR+huPgRWxjUe1E13A+o+y3v1DFtQMfwd6g/CkDyUg8lYO9IvJS+1qV2xpo0vwXbYdgPeT5VfIHbHmL/Cq2w0DSOqILsxCqo4ljwA7yd1Ww8lVhmMJgxDBCQUkOyRuI33Qg9bWpiwmT6XRnqPdNWBynZdEd2Y9/PPvKXyHNmw78yh95f5jvFTyPEq6hlN1O8EU7aeavf17Dx5rl6XeaJJpsOo3uXUMzxgfPuTdefEb9xqrLs1kw7EDet/aQ9f5GrNXRiX6m/u9furldQCb62fu9fup+XrAvTXgs5il4NY/RewPl18q2y1ZDonMNnCywnwlhs4WSxesWkrVxGKVBd2CjvP4dajWcZ0ZAUjuE5nm35Cp4KZ0hy04qzT0b5TkMuK188zDtpCR7q+yvh18/yrpjVNo2cBl0aOLSy3mkHMM4Gyp8ECjxBqq9TWr5sVKuOxKEYeNrxqw/bSA7jbnGp9SLcjXRNbjWhrQ0aBMjGBjQ1ugRRRRXS6RRRRQhFFFFCEUUUUIXNf6QWHK5oGPB8PGwPLcXUj4fGnnQbEh8DDb5u1GfFT+Vj51JNf+jhnwiYqMXbDE7YHHsXsGP3WCnuBY1U+r/PRDI0MhskhBU8hLuA9Ru8hWbisBlp/p1Bv8rIxumdPSnZ1ab92/wAlZ7PSDyVg8lIvJSm1qSGsWbvSDyVg8lIPJU7WKw2NZs9V1pti9vEleSKE87lj+PwqbY/GCNGduCgn8h61Asgy2TH42KAX2p5bMeik7Ujb/oqGPlW3hUH1GQ7svFMWC0/1ulO4WHU/ZS7SnRcw5Dl2I2bMZZXew3FcSA0bMbX9yKMfet0rQ1dYv2ZYvCQfBW/BavzWDkIxGVYjDRr7sIMaj6UNnRR47IXzrmPRXGdliUvwb5M/fIt8bVpVkXaQOHf4LXxCHtaZ7e/wzVlu9IPJWEj0g70tNalFsayd6g+ly/Lg9Y0J9SP5VL3eoTpNMGnP1QF873P41q4c09rfkVs4Uw9tfkfzxXSepeYvk2Fvy7VfJZpAPhakNOtV2EzEtKvyGIPGVBdXP94lwGP1hY954Vv6pcCYcowini0Zk/4rtIPgwqYVtJiXKukGq3NMIT/RzMg4SQfKA/cHtjzW1RaXD4iM7LLKh4bJDqfSu06KEZb1x7lWiOYYpgIcJO9/nFCqecj2UeZq19CNSYRlmzJg5FiMPGbp/vX+d9ld27iRuq66KEJKGJVUKoCqoACgAAAbgABwHdStFFCEUUUUIRRRRQhFFFFCEUUUUISM8KupVgGVgVKneCCLEEdLVzDrQ0AkyyYvGC2Ekb2H47BP9W56jkTxHfeupK1sdgo5o2ilRXRxssjAFSO8GhC5d0e0v2QIsQSQNyycSOgfqO//APal6YhXAZWDKeBBuD5ivdN9SciEy5ce0Tj+ruwEi9yOdzjuNj3mqslGKwchRhLA44qQ0Z6XKniKy6jC2SHajyPksaqwaOVxfGdk8N32Vmu9IO9QWPSvEge0UbvZd/wIrWx2fTyrsswAPEKLX8TVZuFy3sSLfm5U2YNNtWJFuN/ZbulWciU9lGfk1O8/Sbf8BVq6gNEGjVswmWxcGOAHjsX9uTzIAHcDyNRXVjqulxrJiMWpjwoIYKbh5+gUcVTq3McOo6OhiVFCqAqqAAoFgANwAA4CtmKNsbQ1qYIYWxMDG6BKVyRrE0fbL8xmiA2ULGWEgWHZOSUt9nevihrriopp9oVBmkOxJ7EqXMUwFyhPEEfOQ2Fx3cqkUqonKc6SZBcgSAb1O656jqK2pJKZ9IdWmZ4NjfDtKgO6SAGRSOtlG0vmBTEuT41jsjD4hj0EcpPpas52HMLrtNuSyX4Swuu11hwsn3M87SMEKQz9BvA8T/KmzRHR+XMsZHh0v7bbUjj5kdwZHPIbju6kgc6kejOqLMsUQZY/1aPdd5vft9WIe1fx2fGr70M0OwuWRGPDrdmsZJW3ySEcLnko32UbhfqSTbhgbELBX4KdkIs3fvT9h4VRFRRZVUKoHAKBYD0paiiplOiiiihCKKKKEIooooQiiiihCKKKKEIooooQiiiihCKKKKEIrUzDLYZ12J4o5V+jIiuPRga26KEKGYrVbk8hu2CQfYeWMeiOBS2WauMqw7Bo8HHcG4Ll5bHkR2jNUtooQvLV7RRQhFFFFCEUUUUIRRRRQhFFFFCEUUUUIRRRRQhFFFFCEUUUUIX/2Q=="/>
                            <span className={s.chat_name}>{chat.name}</span>
                            <br/>
                            <span
                                className={s.chat_name}> {chat.name === 'Teem chat' ? messages[messages.length - 1].nickname + ':' + messages[messages.length - 1].message + ' ' + messages[messages.length - 1].date.substring(messages[messages.length - 1].date.length - 5) : ''} </span>
                        </div>
                    )}
                </div>
            </div>







            <div className={s.messagesHeader}> </div>
            <div className={s.messages_container}>

                {messages.map((message, key) =>

                    <div className={s.messages_wrapper} key={key}>
                        <img className={s.avatar} src={message.ava} alt="ava"/>
                        <div className={s.messages}>
                            <div className={s.messages_title}>
                                <div><strong>{message.nickname}</strong></div>
                                <div>{message.date.toString()}</div>
                            </div>
                            <div className={s.messages_text}>{message.message}</div>
                        </div>

                    </div>
                )}

                <input className={s.input} onChange={messageHandler} value={message} onKeyDown={enterHandler}/>
            </div>
        </div>
    )
}

export default Messages;