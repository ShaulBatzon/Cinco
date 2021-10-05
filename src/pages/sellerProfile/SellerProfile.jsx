import React from "react";
import { SellerCard } from "./SellerCard.jsx";
import { userService } from '../../services/user.service'
import { Loader } from "../../cmps/Loader.jsx";

export class SellerProfile extends React.Component {
    state = {

    }


    async componentDidMount() {
        const user = userService.login()
        try {
            const seller = await userService.getById(user._id)
            this.setState({ seller })
        }
        catch (err) {
            console.log(err);
        }
    }

    handleChange = (ev) => {
        const { name, value } = ev.target;
        this.setState((prevState) => ({
            ...prevState,
            seller: {
                ...prevState.seller,
                [name]: value
            }
        }), () => console.log('state: ', this.state));
    }

    render() {
        const { seller } = this.state
        // const { gigs, description, languages} = this.state.sellerProfile
        // const {sellerProfile } = this.state
        // console.log('sellerProfile: ',sellerProfile);
        if (!seller) return <Loader />
        return (
            <div className="main-profile">
                <section className="seller-gigs">
                    <ul className="seller-gigs-bar">
                        <li>Active gigs</li>
                        <li>Drafts</li>
                    </ul>

                </section>
                <section className="form-thin">
                    <SellerCard />
                    <article>
                        <form className="description-form">
                            <aside><h3>Description</h3></aside>
                            <section>
                                <textarea className="textarea-description" name="description" maxLength="600" minLength="15" placeholder="Please tell us about any hobbies, additional expertise, or anything else you'd like to add."
                                    spellCheck="false" onChange={this.handleChange}>

                                </textarea>
                                <input type="button" value="Cancel" />
                                <input type="submit" value="Update" />
                            </section>
                        </form>
                        <form className="languages-form">
                            <div>
                                <aside>
                                    <h3>
                                        Languages
                                        <a href="#" className="add">Add New</a>
                                    </h3>
                                </aside>
                                <section>
                                    <div>
                                        <input name="languages" type="text" placeholder="Add Language" className="capitalize" role="combobox" aria-autocomplete="both" value="" onChange={this.handleChange} />
                                    </div>
                                    {/* <ul>
                                        {languages.map(language => {
                                            <li>
                                                <span>{language.title}</span>
                                                <span>{language.subTitle}</span>
                                            </li>
                                        })}
                                    </ul> */}
                                </section>
                            </div>
                        </form>
                    </article>
                </section>
            </div>
        )
    }
}