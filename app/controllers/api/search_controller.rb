class Api::SearchController < ApplicationController
  def index
    query = params[:search][:query] || parseQuery
    limit = params[:search][:limit]
    @results = Course.includes(:lessons, :ratings)
      .search_full_text(query).limit(limit)

    params[:search][:query] ? (render :dropdown) : (render :index)
  end

  private

  def parseQuery
    return "" unless params[:search][:path]
    uri = URI.parse(params[:search][:path])
    uriHash = URI.decode_www_form(uri.query).to_h
    query = uriHash['q']
  end


end
