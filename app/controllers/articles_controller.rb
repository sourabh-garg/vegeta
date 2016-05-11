class ArticlesController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  respond_to :json

  def index

 respond_with Article.all

  end

  def create
    respond_with Article.create(article_params)

  end

  def show 

    respond_with Article.find(params[:id])
  end

  def destroy
    respond_with Article.find(params[:id]).destroy

  end

  private

  def article_params

    params.require(:article).permit(:title, :description)
  end


end