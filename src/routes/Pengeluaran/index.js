import React from 'react';
import { Input , Radio , Button } from 'antd';


class Pengeluaran extends React.Component { 

    state = {
        type : 'debit'
    };
    onChangeType = (event) => 
    {
        this.setState({
            type : event.target.value
        })
    }
    render(){
        return (
            <div>
                <h3>Form Pengeluran</h3>
                <div >
                    <div className="form-Controller">
                            <Input placeholder="Form Pengeluran" />
                    </div>
                </div>
                <br/>
                <div >
                    <div className="form-Controller">
                        <Input placeholder="Kode Pengeluran" />
                    </div>
                </div>
                <div >
                    <div className="form-Controller">
                        <div style={{fontWeight:'bold',marginBttom : 10}}>Tipe Pengeluaran</div>
                        <Radio.Group onChange={this.onChangeType} value={this.state.type}>
                            <Radio value={"debit"}>Debit</Radio>
                            <Radio value={"kredit"}>Kredit</Radio>
                        </Radio.Group>
                    </div>
                </div>
                <div className="form-controller">
                    <Button type="primary">Submit</Button>
                </div>
                
            </div>
            

        )
        
    }
}

export default Pengeluaran;