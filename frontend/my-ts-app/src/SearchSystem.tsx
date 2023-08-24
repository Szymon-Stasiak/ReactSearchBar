import React from 'react';
import {IonIcon} from '@ionic/react';
import {searchOutline} from 'ionicons/icons';
import './SearchSystem.css';

interface ContainerProps {
}

interface ContainerState {
    searchWord: string;
    displayWord: string;
}

class SearchBox extends React.Component<ContainerProps, ContainerState> {
    constructor(props: ContainerProps) {
        super(props);
        this.state = {searchWord: '', displayWord: ''};
    }

    handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const {searchWord} = this.state;
            this.setState({
                displayWord: searchWord,
                searchWord: '',
            });
        }
    };

    handleSearchChange = (value: string) => {
        this.setState({
            searchWord: value,
        });
    };

    render() {
        const {searchWord} = this.state;
        const {displayWord} = this.state;
        return (
            <div>
                <div className="App">
                    <div className="searchBox">
                        <div className="shadow"></div>
                        <input
                            type="text"
                            placeholder="Search Anything you want..."
                            value={searchWord}
                            onChange={(e) => this.handleSearchChange(e.target.value)}
                            onKeyPress={this.handleKeyPress}
                        />
                        <IonIcon id="search" icon={searchOutline}/>
                    </div>

                </div>

                <div className="BottomBox">
                    <div className="lastWordBox">
                        <div className="shadow"></div>
                        <div className="lastWord">Last asked: {displayWord}</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default SearchBox;