import React, { Component } from 'react';
import { Carousel, WingBlank,Icon  } from 'antd-mobile';
export class hot extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
    }
    
    render() {
        return (
            <div className='hot'>
                <div className='lunb'>
                <WingBlank>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}>
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }} />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                </div>
                <div className='biao'>
                    <dl className='dls'>
                        <dd>
                            <Icon type="check-circle "/>
                        </dd>
                        <dt>
                            网络小说
                        </dt>
                    </dl>

                    <dl className='dls'>
                        <dd>
                            <Icon type="check "/>
                        </dd>
                        <dt>
                        情感
                        </dt>
                    </dl>
                    <dl className='dls'>
                        <dd>
                            <Icon type="cross-circle "/>
                        </dd>
                        <dt>
                        财经
                        </dt>
                    </dl>
                    <dl className='dls'>
                        <dd>
                            <Icon type="cross "/>
                        </dd>
                        <dt>
                        相声
                        </dt>
                    </dl>
                    <dl className='dls'>
                        <dd>
                            <Icon type="check-circle-o"/>
                        </dd>
                        <dt>
                        儿童
                        </dt>
                    </dl>
                {/* <Icon type="check-circle "/> */}
                </div>
                <div className='kuai'>

                </div>
            </div>
        );
    }
}

export default hot;
