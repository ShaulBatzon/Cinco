import React from "react";
import { userService } from '../../services/user.service'
import { utilService } from '../../services/util.service'


export class AddGig extends React.Component {
  state = {
    gig: {
      _id: utilService.makeId(),
      seller: {},
      title: '',
      description: ''
    }
  }

  componentDidMount() {
    const seller = userService.getLoginUser()
    this.setState((preState) => (({
        ...preState,
          _id: seller._id,
          fullname: seller.fullname,
          imgUrl: seller.imgUrl,
          description: seller.description
    })), () => console.log('cdm state: ', this.state.gig))
  }

  handleChange = (ev) => {
    const { name, value } = ev.target;
    this.setState((prevState) => ({
      ...prevState,
      gig: {
        ...prevState,
        [name]: value
      }
    }), () => console.log('handelChange state: ', this.state));
  }


  render() {
    return (
      <div className="add-gig-page">
        <from className="add-gig-form">
          <div>
            <label>Gig Title</label>
            <div>
              <span>I will</span>
              <textarea name="title" maxlength="80" placeholder="do something I'm really good at" spellcheck="false"></textarea>
            </div>
          </div>

          <label>Search Tags</label>
        </from>
      </div>
    );
  }
}
