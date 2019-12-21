//State
import React from 'react';
import Square from './Component/Square';
import { DatePicker } from 'antd';


class ComponentDua extends React.Component {
    state={
        nama : "Hallo",
        angka : 1,
        warna : ["green","yellow","red","blue"]
    };

    gantiNama = () => {
        /*let nama = "agus";
        nama = "Zacky";
        let buah = {
            nama : "appler"
        };
        buah.nama = 'Anggur';*/
        this.setState({
            nama : "Agus"
        });
    }

    tambahAngka = () => {
        let angkaSekarang = this.state.angka;
        let angkaBaru = angkaSekarang + 1;
        this.setState(
            {
                angka : angkaBaru
            }
        );
    };

    kurangAngka = () => {
        let angkaSekarang = this.state.angka;
        let angkaBaru = angkaSekarang - 1;
        this.setState(
            {
                angka : angkaBaru
            }
        );
    };

    render(){
        return (
        <div>
            Belajar State {this.state.nama}
            &nbsp;
            <button onClick={this.gantiNama}>Ganti Nama</button>
            <div>
                <button onClick={this.kurangAngka} >-</button>
                <button>{this.state.angka}</button>
                <button onClick={this.tambahAngka} >+</button>
            </div>
            <Square 
                    warna={'green'} 
                    title={"Box 1"} >
                        <div><h1>ini test</h1></div>
                        </Square>
            {/* <Square warna={'red'} 
                    title={"Box 2"} />
            <Square warna={'yellow'} 
                    title={"Box 3"}/>


            
            <div style={{
                backgroundColor : this.state.warna[this.state.angka],
                width: "200px",
                height:"200px"
            }}>
            </div> */}
            <DatePicker/>

            
        </div>

        );
    }

}

export default ComponentDua;