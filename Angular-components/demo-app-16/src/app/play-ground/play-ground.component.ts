import { Component } from '@angular/core';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent {
  isToggle = false;
  bgGreen = 'background-green';
  imgUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEX/q2+jQSD/rnH/rXCcNxf/sXOeOhqhPh6cNhf4o2nag1Lznmb8p2zXgFCmRSP3omntmGHfiVbKcUW8YTmvUCzCaD7QeEq0VzHnkVy+YzrHbUKwUS3vmmO3WzTnkl2mdaB1AAAE7UlEQVR4nO3c2Y7qOhAF0FCeMk8kQAPh/z/zOAwC0U5wQPfiau311g8teas8JLZDFAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8lxDi2034bwgipcimy/MxpbJ/EP2ZrIJUfir260NptIwtbcpu6Nv0lJBiH9OmS5q+jLU2xqzu7F9aa6kPbVOxTklRupX6MdoTm1Ou+ibnmVKopNVz8e4x5SHNFbuMFO1j/TreLWQ87HgVUqjUp3yPIWVZRHwyimgtF+U703pjS88CVaV3B33K2LCoImVmWQ99iFhwKKKo3ivgSGbfbr2X8t0K2vmGQwnV9oOAg/p281+j4o1Z9IbFMEw+CLiSdfhTqdq/P83YhOEH/KyEZhv+MKTNJyU0m/CHIc00f3wjHD2/LN7pXfC9VNRTndTIrm1OxyzL6l266Q/29fd3TBkFn5A27uKYuE3UdWdGCCJSImva7unt2HThD8OJ1d6U1e+2j/s3TW/k/T9My2AYTnTSid43lrPem1slObxYuNcK3czUxobcrS+FlMn/19I3iZNzrdAvOt+4o2Psf5bhD0PRuBL6rONE6SruGQzD1Jlw7VMbooLBMKTi3Rqe/zv8gBMJOSzkvty91K5z4U8hnsTO/dwdN38m4nFixZfFH4kooqkHb7nN+B1MuKhyIqF9t1jXKvz17iXaT++z2fenImEfUuzmNjGMjrcF7xPR2Xf8a0hZtifBuJQ++zT29X6dsi2lyL12omx/LduaWFZy4sHNWcpVe+RYSbXgXEbHXcrlTPROZEv2hI3WbcLteYeaeEHE8z5czqyOaunpk9EFs0c6VSyroh2QXcarjKqRC09JDbe3Dzouvowhe14RhejjhWXUA7O1UdXdwglHczjEfyRUUy67+aX3zCJGpJpu0ZQj57b/w0Sq7r1uYN4i5t9u8XJCvbpF+8gwm1AvxnPCdK211/IR87j19RupaNeWHqXkWcQLW8pqLOWLkDLntSg+saU87Vez06tO2U2nTwTRqZ8Zk+aHe8LoPL0Wq8mMhu9AfGALuZnc/w//MN+PylYT96IYXE/0I5KJhAzOuj2R81rDH5hM79wHVSyuCXui3tVPGST0biC1rm4afC9VZe+7w+s+bAz9jqnIpZb7ymv7U3WuhKFfZj/fxjDx4HOinTl3VePAV/zr+eF4ov3qw9Cpu6iBP7Wp4dpso+N1E81UUvXu20Vel+C+iB6abbQc0sz5WbpQydb97B38YvF0tGbGD5nTOjp/fn8JOt4LVsf91EtiXH05wQuui23jV/jdT5s2dVYlSXbcFX05+RIc/GV292PK6vKxxeVrCzm7kcFgvZ9uvBfz7QSv5EsPDp9LGPo8M3X70l/gASeepf3FgT+T2mF4eP8DWUsz2A7+5OPDlTmE3kdnvlzzClh+u/2v+d/4cgVcVaEPQptweH8Y6pLDgYVopreyX5DDtxvvhyidfuScYWI+l6KImq3/D+9c88mhCn4WfSBU1s4foD3n63bhL4NPiOq2jL3O7nW8PbHpoI/GA99icH6v/VA9LcuN37ZcmEhRlu47G1M/BT3/Wps06zRjfGf/avwsvdoV7c+2vL0A21fgbuiLXUX8492cv79XKsoTK48uv5rIt2/OuP7ewLebAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs/QMY5TD046iixQAAAABJRU5ErkJggg=='
  handleClick(event: Event) {
    console.log('CLICKED!!!', event);
    this.isToggle = !this.isToggle
    console.log(this.isToggle);
  }

  handleInput(usernameValue: string) {
    console.log('username:', usernameValue);
    
  }
}