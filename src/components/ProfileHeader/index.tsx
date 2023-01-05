import {
  IconsContainer,
  InfoContainer,
  ProfileHeaderContainer,
  ProfileHeaderContent,
} from './style'
import { ArrowSquareOut, Buildings, FolderNotchOpen } from 'phosphor-react'
import githubIcon from '../../assets/github-icon.svg'
import { useContext } from 'react'
import { UserInfoContext } from '../../contexts/UserInfoContext'

export function ProfileHeader() {
  const { userinfo } = useContext(UserInfoContext)

  return (
    <ProfileHeaderContainer>
      <ProfileHeaderContent>
        <img
          className="profile-img"
          src={userinfo.avatar_url}
          alt="Imagem de rosto de Alex Santos"
        />
        <InfoContainer>
          <header>
            <h1>{userinfo.name}</h1>
            <span>
              <strong>SOURCE</strong>
              <ArrowSquareOut size={16} weight="bold" />
            </span>
          </header>
          <p>{userinfo.bio}</p>
          <IconsContainer>
            <div>
              <img src={githubIcon} alt="Ícone do Github" />
              {userinfo.login}
            </div>
            <div>
              <Buildings size={18} />
              {userinfo.company}
            </div>
            <div>
              <FolderNotchOpen size={18} />
              <strong>Public Repos:</strong>
              {userinfo.public_repos}
            </div>
          </IconsContainer>
        </InfoContainer>
      </ProfileHeaderContent>
    </ProfileHeaderContainer>
  )
}
