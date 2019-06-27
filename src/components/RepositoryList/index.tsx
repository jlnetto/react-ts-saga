import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { ApplicationState } from '../../store'
import { Repository } from '../../store/ducks/repositories/types'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'

interface StateProps {
	repositories: Repository[]
}

interface DispatchProps {
	loadRequest(): void
}

type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {

	state = {
		newRepository: ''
	}
	
	componentDidMount() {
		const { loadRequest } = this.props
		
		loadRequest()
	}

	renderRepositoryList = () => {
		const { repositories } = this.props

		return repositories.map( repository => <li>{repository.name}</li>)
	}

	render() {
		const renderRepositoryList = this.renderRepositoryList()

		return (
			<ul>
				{renderRepositoryList}
			</ul>
		)
	}
}

const mapStateToProps = ({ repositories }: ApplicationState) => ({
	repositories: repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)