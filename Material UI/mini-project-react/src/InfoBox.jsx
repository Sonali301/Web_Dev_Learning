
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {

    const INIT_URL =
        "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";

    const HOT_URL =
        "https://images.unsplash.com/photo-1619274922922-8a8e81767523?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEhPVCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL =
        "https://images.unsplash.com/photo-1641607745477-4e0b7b46b400?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL =
        "https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UkFJTiUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">

            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            info.humidity > 80
                                ? <ThunderstormIcon/>
                                : info.temp > 15
                                ? <SunnyIcon/>
                                : <AcUnitIcon/>
                            }
                        </Typography>
                        <Typography variant="body2" color='text.secondary' component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            {/* &deg;C is used for degree celsius */}
                            <p>Humidity={info.humidity}</p>
                            <p>Min Temp = {info.tempMin}&deg;C</p>
                            <p>Max Temp = {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>

        </div>
    );
}