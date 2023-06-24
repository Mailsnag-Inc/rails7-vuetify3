class BlogsController < ApplicationController
  def index
    @blogs = [
      { id: 1, name: "My first blog"},
      { id: 2, name: "Another blog"}
    ]
  end

  def show
    @blog = { id: params[:id], name: "Some random blog #{params[:id]}"}
  end
end
